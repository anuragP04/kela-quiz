import type { LoaderFunction } from '@remix-run/server-runtime'
import { json } from '@remix-run/server-runtime'
import invariant from 'tiny-invariant'
import ExamPendingComponent from '~/components/results/ExamPending'
import { getCandidateEmailById } from '~/models/result.server'

export const loader: LoaderFunction = async ({ request, params }) => {
  invariant(params.resultsId, 'resultId not found')
  const testPreview = await getCandidateEmailById({ id: params.resultsId })
  if (!testPreview) {
    throw new Response('Not Found', { status: 404 })
  }

  return json({ testPreview })
}
const ExamPending = () => {
  return <ExamPendingComponent />
}

export default ExamPending
