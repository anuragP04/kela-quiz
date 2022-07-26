import { Icon } from '@iconify/react'
import type { TestSection } from '~/interface/Interface'

const TestPreview = ({
  name,
  description,
  onSelectedSectionChange,
  selectedSections,
}: {
  name: string
  description: string
  selectedSections: Array<TestSection>
  onSelectedSectionChange: (e: any) => void
}) => {
  const moveSection = (index: number, action: string) => {
    if (action == 'up') {
      if (index == 0) {
        return
      }
      onSelectedSectionChange((section: Array<TestSection>) => {
        let temp = section[index]
        section[index] = section[index - 1]
        section[index - 1] = temp
        return [...section]
      })
    } else if (action == 'down') {
      if (index == selectedSections.length - 1) {
        return
      }
      onSelectedSectionChange((section: Array<TestSection>) => {
        let temp = section[index]
        section[index] = section[index + 1]
        section[index + 1] = temp
        return [...section]
      })
    }
  }

  const getTotalTime = () => {
    let time = 0

    selectedSections.forEach((section) => (time += section?.time || 0))

    return time
  }

  return (
    <div className="flex flex-col gap-9 overflow-auto rounded-lg bg-white p-6">
      <div className="flex flex-col gap-6">
        <h1 className="text-xl font-semibold">Test Details</h1>
        <div className="flex flex-col gap-4 text-base">
          <div className="flex">
            <div className="w-50 min-w-[200px] font-semibold text-gray-500">
              Name
            </div>
            <div className="flex-1 font-normal text-gray-700">{name}</div>
          </div>
          <div className="flex">
            <div className="w-50 min-w-[200px] font-semibold text-gray-500">
              Description
            </div>
            <div
              className="flex-1 font-normal text-gray-700"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          </div>
          <div className="flex">
            <div className="w-50 min-w-[200px] font-semibold text-gray-500">
              Total Time
            </div>
            <div className="flex-1 font-normal text-gray-700">
              {getTotalTime()}
            </div>
          </div>
          <div className="flex">
            <div className="w-50 min-w-[200px] font-semibold text-gray-500">
              Total Sections
            </div>
            <div className="flex-1 font-normal text-gray-700">
              {selectedSections.length}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-xl font-semibold">Selected Sections</h1>
        <div className="flex flex-col gap-4 text-base">
          {selectedSections.map((section, i) => {
            return (
              <div className="flex items-center gap-4" key={section.id}>
                <div className="w-44 min-w-[184px] font-semibold text-gray-500">
                  Section {i + 1}
                </div>
                <div className=" flex max-w-2xl flex-1 items-center justify-between gap-6 rounded-lg border border-gray-300	py-3 px-4 font-normal text-gray-700">
                  <div className="text-base font-semibold text-gray-700">
                    {section.name}
                  </div>
                  <div className="flex gap-6 text-sm font-normal text-gray-700">
                    <span>
                      {section.totalQuestions ? section.totalQuestions : 0}{' '}
                      Questions
                    </span>
                    <span>{section.time ? section.time : 0} Mins</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Icon
                    icon="fa:long-arrow-up"
                    className="cursor-pointer"
                    onClick={() => moveSection(i, 'up')}
                  />
                  <Icon
                    icon="fa:long-arrow-down"
                    className="cursor-pointer"
                    onClick={() => moveSection(i, 'down')}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TestPreview