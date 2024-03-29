import { useEffect, useState } from 'react'
import AddMemberModal from './AddMemberModal'
import { members } from '~/constants/common.constants'
import { useLoaderData } from '@remix-run/react'
import Button from '../form/Button'

export default function MembersHeader({
  actionStatus,
  setActionStatus,
}: {
  actionStatus: boolean
  setActionStatus: (e: boolean) => void
}) {
  const membersData = useLoaderData()
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (actionStatus) {
      setOpen(false)
      setActionStatus(false)
    }
  }, [actionStatus, setActionStatus])
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="membersHeading text-3xl font-bold">{members.members}</h1>
        <Button
          tabIndex={0}
          id="add-member"
          className="h-9 px-4"
          onClick={() => setOpen(!open)}
          varient="primary-solid"
          title={members.addMember}
          buttonText={members.addMember}
        />
      </div>
      <AddMemberModal roles={membersData.roles} open={open} setOpen={setOpen} />
    </div>
  )
}
