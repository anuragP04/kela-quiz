import { useEffect, useState } from 'react'
import SortFilter from '../SortFilter'
import { resultConstants, commonConstants } from '~/constants/common.constants'

import { useLoaderData, useSubmit } from '@remix-run/react'
import GroupByTestItems from './GroupByTestItems'
import type { CandidateTest, Test } from '~/interface/Interface'
const GroupByTests = () => {
  const [sortDirection, onSortDirectionChange] = useState('asc')
  const [sortBy, onSortChange] = useState('name')
  const filterByType = [
    {
      name: 'Name',
      value: 'name',
    },
    {
      name: 'Created Date',
      value: 'createdAt',
    },
  ]
  const candidateTestData = useLoaderData()
  const candidateTests = candidateTestData.candidateTest
  const submit = useSubmit()
  useEffect(() => {
    const filter = {
      orderBy: {
        [sortBy]: sortDirection,
      },
    }
    submit({ data: JSON.stringify(filter) }, { method: 'get' })
  }, [sortDirection, sortBy, submit])
  return (
    <div className="flex flex-col gap-6" id="group-by-test-container">
      <h1 className="text-3xl font-bold text-gray-900 ">Results</h1>
      <div className="flex flex-col gap-6">
        <div id="sort-filter-container">
          <SortFilter
            filterData={filterByType}
            sortDirection={sortDirection}
            onSortDirectionChange={onSortDirectionChange}
            sortBy={sortBy}
            onSortChange={onSortChange}
            totalItems={candidateTests?.length}
            showSelected={false}
          />
        </div>

        <div className="rounded-lg bg-[#F9FAFB] shadow-table">
          <div className="col-span-full grid grid-cols-10 rounded-lg border-[1px] border-solid border-borderColor bg-white">
            <div className="col-span-full grid grid-cols-10 gap-3 bg-tableHeader py-4 px-12">
              <span className="col-span-1 text-sm font-semibold text-gray-500">
                {resultConstants.srNo}
              </span>
              <span className="col-span-3 text-sm font-semibold text-gray-500">
                {resultConstants.test}
              </span>
              <span className="col-span-2 text-sm font-semibold text-gray-500">
                {commonConstants.total} {resultConstants.totalInvited}
              </span>
              <span className="col-span-2 text-sm font-semibold text-gray-500">
                {commonConstants.total} {resultConstants.totalAttended}
              </span>
              <span className="col-span-1 text-sm font-semibold text-gray-500">
                {resultConstants.status}
              </span>
            </div>
            <div id="group-by-test-items" className="col-span-10 grid">
              {candidateTests.map(
                (
                  candidateTests: Test & {
                    count?: number | undefined
                    candidateTest?: CandidateTest
                  },
                  index: number
                ) => (
                  <div
                    key={candidateTests.id}
                    className="GroupByTestRow col-span-10 grid"
                    id="group-by-items-container"
                    data-cy="group-by-items-container"
                  >
                    <GroupByTestItems
                      candidateName={candidateTests?.name}
                      candidateInvitedCount={
                        candidateTests?.candidateTest?.length as number
                      }
                      candidateAttendedCount={candidateTests?.count}
                      testDeletedStatus={candidateTests?.deleted}
                      index={index + 1}
                      id={candidateTests?.id}
                    />
                  </div>
                )
              )}
              {candidateTests.length === 0 && (
                <div className="flex items-center justify-center p-7">
                  <span>{resultConstants.noTestAlert}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default GroupByTests
