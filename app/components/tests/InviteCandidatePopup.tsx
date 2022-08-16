import { Form, useActionData } from '@remix-run/react'
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react'
import { toast } from 'react-toastify'

const InviteCandidatePopup = ({
  openInvitePopup,
  setOpenInvitePopup,
  testName,
  testId,
}: {
  openInvitePopup: boolean
  setOpenInvitePopup: (e: boolean) => void
  testName: string
  testId: string
}) => {
  const [emails, setEmails] = useState<Array<string>>([''])

  const actionData = useActionData()

  useEffect(() => {
    if (actionData?.status == 401) {
      toast.warn(actionData.message)
    }
    if (actionData?.candidateInviteStatus == 'created') {
      toast.success('Candidates Invited')
      setOpenInvitePopup(false)
    } else {
      if (actionData?.candidateInviteStatus) {
        toast.error('Candidate Invite Error')
      }
    }
  }, [actionData, setOpenInvitePopup])

  return (
    <Transition.Root show={openInvitePopup} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenInvitePopup}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <Form
            method="post"
            className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white p-6 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="flex items-center justify-between pt-1">
                  <h2 className="text-2xl font-bold text-gray-700">
                    Invite Candidate
                  </h2>
                  <Icon
                    className="cursor-pointer text-2xl text-gray-600"
                    icon={'carbon:close'}
                    onClick={() => setOpenInvitePopup(false)}
                  />
                </div>
                <hr className="mt-4 mb-6 h-px w-full border-0 bg-gray-300" />
                <p className="pb-4 text-base font-normal text-gray-700">
                  Enter candidate’s email below to invite them for{' '}
                  <span className="font-semibold">`{testName}`</span> Test.
                </p>

                <div className="flex flex-row justify-between pb-2">
                  <span className="text-sm font-medium text-gray-500">
                    Candidate Email
                  </span>
                  <span
                    className="cursor-pointer text-sm font-normal text-primary"
                    onClick={() => setEmails([...emails, ''])}
                  >
                    Invite More +
                  </span>
                </div>

                {emails.map((email, i) => {
                  return (
                    <div className="pb-2" key={i}>
                      <input
                        type="email"
                        name={`email`}
                        className="h-11 w-full rounded-lg border border-gray-200 px-3 text-base"
                        placeholder="johndoe@example.com"
                      />
                    </div>
                  )
                })}

                <div className="flex justify-end gap-2 pt-4">
                  <button
                    type="button"
                    className="h-9 rounded-md px-4 text-sm text-gray-500"
                    onClick={() => setOpenInvitePopup(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    name="inviteCandidates"
                    value={testId}
                    id="submitButton"
                    className="h-9 rounded-md bg-primary px-4 text-sm text-[#F0FDF4]"
                    // onClick={() => setOpen(false)}
                  >
                    Invite
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </Form>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default InviteCandidatePopup