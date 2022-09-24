import { useNavigate, useSubmit, useTransition } from '@remix-run/react'
import { useState } from 'react'
import Button from '~/components/form/Button'
import DropdownField from '~/components/form/Dropdown'
import Logo from '~/components/Logo'
import { commonConstants, logIn, members } from '~/constants/common.constants'
import { trimValue } from '~/utils'
import type { Role } from '~/interface/Interface'
import { routes } from '~/constants/route.constants'

const SignUp = ({ roles }: { roles: Role[] }) => {
  const transition = useTransition()
  const submit = useSubmit()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState(roles[0].id)

  const submitMemberForm = () => {
    let data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      roleId: role,
      addMember: JSON.stringify({
        action: 'add',
      }),
    }
    submit(data, {
      method: 'post',
    })
  }
  const navigate = useNavigate()
  const signIn = () => {
    navigate(routes.signIn)
  }
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-6 rounded-2xl bg-white px-20 py-12 pb-8 text-left drop-shadow-2xl transition-all sm:w-full sm:max-w-xl">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="-mt-20 flex justify-center">
              <Logo height="64" width="64" />
            </div>
            <h2
              className="text-center text-3xl font-bold text-gray-900"
              tabIndex={0}
              title={members.addMember}
              role={members.addMember}
              aria-label={members.addMember}
            >
              {logIn.signUp}
            </h2>
            <hr className="h-px w-6/12 border-none bg-gray-500 text-center" />
          </div>

          <div className="flex justify-between gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="" className="text-gray-800">
                {members.firstName}
              </label>
              <input
                tabIndex={0}
                id="firstName"
                type="text"
                name="firstName"
                className="h-11 w-full rounded-lg border border-gray-200 px-3 text-base"
                placeholder={members.firstName}
                onChange={(e) => setFirstName(trimValue(e.target.value))}
                value={firstName}
                maxLength={40}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="" className="text-gray-800">
                {members.lastName}
              </label>
              <input
                tabIndex={0}
                id="lastName"
                type="text"
                name="lastName"
                className="h-11 w-full rounded-lg border border-gray-200 px-3 text-base"
                placeholder={members.lastName}
                onChange={(e) => setLastName(trimValue(e.target.value))}
                value={lastName}
                maxLength={40}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="" className="text-gray-800">
              {commonConstants.email}
            </label>
            <input
              tabIndex={0}
              id="email"
              type="text"
              name="email"
              className="h-11 w-full rounded-lg border border-gray-200 px-3 text-base"
              placeholder={commonConstants.email}
              onChange={(e) => setEmail(trimValue(e.target.value))}
            />
          </div>
          <div className="">
            <div>
              <label htmlFor="" className="text-gray-800">
                {members.role}
              </label>
            </div>
            <DropdownField
              data={roles}
              name="roleId"
              displayKey={'name'}
              valueKey={'id'}
              value={role}
              setValue={setRole}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <Button
              tabIndex={0}
              id="add-button"
              name="addMember"
              value={'add'}
              className="h-11 w-full px-4"
              isDisabled={transition.state === 'submitting'}
              title={
                transition.state === 'submitting'
                  ? logIn.signingUp
                  : logIn.signUp
              }
              buttonText={
                transition.state === 'submitting'
                  ? logIn.signingUp
                  : logIn.signUp
              }
              varient="primary-solid"
              onClick={() => submitMemberForm()}
            />
            <div className="text-base font-medium text-gray-500">
              {logIn.AlreadyHaveAnAccount}{' '}
              <span
                className="cursor-pointer text-primary"
                tabIndex={0}
                onClick={() => {
                  console.log('sign-in')
                  signIn()
                }}
                onKeyUp={(e) => {
                  if (e.key === 'Enter') signIn()
                }}
                role="link"
              >
                {logIn.signIn}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SignUp
