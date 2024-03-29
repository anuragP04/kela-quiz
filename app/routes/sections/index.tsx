import type { LoaderFunction } from '@remix-run/server-runtime'
import { json } from '@remix-run/node'
import { getAllSections } from '~/models/sections.server'
import { getAllUsers } from '~/models/user.server'

type LoaderData = {
  sections: Awaited<ReturnType<typeof getAllSections>>
  users: Awaited<ReturnType<typeof getAllUsers>>
}

export const loader: LoaderFunction = async ({ request }) => {
  const sections = await getAllSections('')
  const users = await getAllUsers()
  return json<LoaderData>({ sections, users })
}
export default function Section() {
  return (
    <div className="flex h-full w-full flex-col gap-6 overflow-auto rounded-lg border border-gray-200 bg-white px-9 py-6">
      Select any section to see its details....
    </div>
  )
}
