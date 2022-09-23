import { useState } from 'react'
import Button from '../form/Button'
import InputField from '../form/InputField'
import Logo from '../Logo'
import { Form, useNavigate } from '@remix-run/react'
import {
  commonConstants,
  forgotPasswordConstants,
  statusCheck,
} from '~/constants/common.constants'
import { routes } from '~/constants/route.constants'

const UserForgetPassword = ({
  checkErrorStatus,
}: {
  checkErrorStatus: boolean
}) => {
  const [email, setEmail] = useState('')
  let navigate = useNavigate()
  const inputFieldsProps = [
    {
      label: '',
      placeholder: forgotPasswordConstants.enterEmailPlaceholder,
      type: 'text',
      name: 'email',
      required: true,
      value: email,
      error: checkErrorStatus ? statusCheck.resendPasswordError : '',
      errorId: 'email-error',
      onChange: function (event: any) {
        setEmail(event?.target.value)
      },
    },
  ]
  return (
    <div className="flex flex-1 items-center justify-center bg-gray-50">
      <div className="min-w-554 flex flex-col gap-6 rounded-md border border-gray-50 bg-white px-24 pb-12 text-center drop-shadow-sm">
        <div className="-mt-9 flex justify-center">
          <Logo height="64" width="64" />
        </div>
        <div
          id="forget-pass-header"
          className="text-3xl font-bold text-gray-900"
        >
          {forgotPasswordConstants.header}
        </div>
        <div className="flex items-center justify-center">
          <hr className="h-px w-6/12 border-none bg-gray-500 text-center" />
        </div>

        <div className="text-xs text-gray-500">
          {forgotPasswordConstants.enterEmail}
        </div>
        <Form method="post" className="flex flex-col gap-6">
          <div className="flex flex-col">
            <span className="flex justify-start text-base text-gray-800">
              {commonConstants.email}
            </span>
            <div>
              {inputFieldsProps.map((props) => {
                return <InputField {...props} key={props.name} />
              })}
            </div>
          </div>
          <div className="-mt-3 flex justify-end">
            <span
              id="back-to-login"
              tabIndex={0}
              onClick={() => {
                navigate(routes.signIn)
              }}
              onKeyUp={(e) => {
                if (e.key === 'Enter') navigate(routes.signIn)
              }}
              role="link"
              className="cursor-pointer text-sm text-primary"
            >
              {forgotPasswordConstants.backToLogin}
            </span>
          </div>
          <Button
            tabIndex={0}
            id="reset-password"
            varient="primary-solid"
            type="submit"
            className="h-11 w-358"
            title={forgotPasswordConstants.resetPassword}
            buttonText={forgotPasswordConstants.resetPassword}
          />
        </Form>
      </div>
    </div>
  )
}

export default UserForgetPassword
