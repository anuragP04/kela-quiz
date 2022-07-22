import { Icon } from '@iconify/react'
import { useState } from 'react'
import SectionCard from './SectionCard'
import type { Section } from '~/interface/Interface'
import { useResolvedPath, useLocation, NavLink } from '@remix-run/react'
import {} from '@remix-run/react'

const SectionLink = ({ section }: { section: any }) => {
  const path = `/sections/${section.id}`
  const location = useLocation() // to get current location
  const resolvedPath = useResolvedPath(path) // to get resolved path which would match with current location
  return (
    <NavLink to={path} key={section.id}>
      <SectionCard
        isActive={location.pathname === resolvedPath.pathname}
        name={section?.name}
        createdBy={`${section?.createdBy?.firstName} ${section?.createdBy?.lastName}`}
        questionsCount={section?._count?.questions}
        createdAt={section.createdAt}
      />
    </NavLink>
  )
}

const Sections = ({ data }: { data: { sections: Array<Section> } }) => {
  const [sortDirection, setSortDirection] = useState(true)

  const filterByType = [
    {
      name: 'Name',
      value: 'name',
    },
    {
      name: 'Created Date',
      value: 'date',
    },
  ]

  return (
    <div className="flex w-96 flex-col gap-6 overflow-auto">
      {/* filters */}
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-2.5">
          {sortDirection ? (
            <Icon
              icon="ph:sort-ascending-bold"
              onClick={() => setSortDirection(false)}
              className="cursor-pointer text-2xl"
            />
          ) : (
            <Icon
              icon="ph:sort-descending-bold"
              onClick={() => setSortDirection(true)}
              className="cursor-pointer text-2xl"
            />
          )}
          <select className="test-base h-11 w-36 rounded-lg border border-gray-200 px-3">
            {filterByType.map((filterBy, i) => {
              return (
                <option key={i} value={filterBy?.value}>
                  {filterBy?.name}
                </option>
              )
            })}
          </select>
        </div>
        <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 bg-white">
          {data?.sections?.length}
        </span>
      </div>

      {/* list */}
      {data.sections?.map((section: any) => (
        <SectionLink key={section.id} section={section} />
      ))}
      {data.sections.length === 0 && (
        <div className="flex justify-center p-7">No Record Found</div>
      )}
    </div>
  )
}

export default Sections
