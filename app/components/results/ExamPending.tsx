import { useLoaderData } from '@remix-run/react'
import CandidtateListOfTestItem from '~/components/results/CandidtateListOfTestItem'
import { members, resultConstants } from '~/constants/common.constants'

const ExamPendingComponent = () => {
  const { testPreview } = useLoaderData()
  const testData = testPreview?.candidateTest

  return (
    <>
      {testData.length !== 0 ? (
        <div className="grid grid-cols-12  bg-[#F9FAFB] pb-4  ">
          <div className="col-span-full grid grid-cols-10 rounded-lg border border-solid border-[#E5E7EB] bg-tableHeader shadow-table">
            <div className="col-span-full grid grid-cols-10 py-4 px-12">
              <span className="col-span-1 text-sm  font-semibold  text-gray-500">
                {resultConstants.srno}
              </span>
              <span className="col-span-3 text-sm  font-semibold  text-gray-500">
                {members.email}
              </span>
              <span className="col-span-2 text-sm  font-semibold  text-gray-500">
                {resultConstants.invitedBy}
              </span>
            </div>
            {testData?.map((data: any, i: any) => (
              <div
                key={data.id}
                className="memberRow col-span-10 grid  rounded-lg"
              >
                <CandidtateListOfTestItem
                  email={data?.candidate?.email}
                  invitedBy={`${data?.candidate?.createdBy?.firstName} ${data?.candidate?.createdBy?.lastName}`}
                  index={i}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>No Candidate for this Test</div>
      )}
    </>
  )
}

export default ExamPendingComponent
