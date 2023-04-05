import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.appDashboard())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>()
  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await logIn({ ...data })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      if (response.error === 'User not Verified') {
        navigate(routes.verificationReset({ email: data.username }))
      }
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <MetaTags title="Login" />
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      {/* Page Container */}
      <div
        id="page-container"
        className="mx-auto flex min-h-screen w-full flex-col bg-white"
      >
        {/* Page Content */}
        <main id="page-content" className="flex max-w-full flex-auto flex-col">
          <div className="relative mx-auto flex min-h-screen w-full max-w-10xl items-center justify-center overflow-hidden p-4 lg:p-8">
            {/* Patterns Background */}
            <div className="absolute top-0 right-0 h-32 w-32 translate-x-16 translate-y-16 transform text-gray-300 pattern-dots-md lg:h-48 lg:w-48" />
            <div className="absolute bottom-0 left-0 h-32 w-32 -translate-x-16 -translate-y-16 transform text-gray-300 pattern-dots-md lg:h-48 lg:w-48" />
            {/* END Patterns Background */}

            {/* Sign In Section */}
            <div className="relative w-full py-6 md:w-8/12 lg:w-6/12 lg:py-0 xl:w-4/12">
              {/* Heading */}
              <div className="text-center">
                <div className="mx-auto mb-10 flex h-20 w-20 rotate-12 items-center justify-center rounded-tl-3xl rounded-bl-xl rounded-br-3xl border-2 border-white bg-gradient-to-bl from-indigo-400 to-purple-400 text-white shadow-xl shadow-purple-500/25">
                  <svg
                    className="hi-outline hi-user-circle inline-block h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
                  Sign In
                </h2>
              </div>
              {/* END Heading */}

              {/* Sign In Form */}
              <div className="flex flex-col overflow-hidden rounded bg-white shadow-sm">
                <div className="w-full grow p-5 lg:p-6">
                  <div className="sm:p-5 lg:px-10 lg:py-8">
                    <Form onSubmit={onSubmit} className="space-y-6">
                      <div className="space-y-1">
                        <Label
                          name="username"
                          className="font-medium"
                          errorClassName="font-medium rw-label-error"
                        >
                          Username
                        </Label>
                        <TextField
                          name="username"
                          className="block w-full rounded border border-gray-200 px-5 py-3 leading-6 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                          errorClassName="rw-input-error block w-full rounded border border-gray-200 px-5 py-3 leading-6 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                          ref={usernameRef}
                          validation={{
                            required: {
                              value: true,
                              message: 'Username is required',
                            },
                          }}
                        />

                        <FieldError
                          name="username"
                          className="rw-field-error"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label
                          name="password"
                          className="font-medium"
                          errorClassName="font-medium rw-label-error"
                        >
                          Password
                        </Label>
                        <PasswordField
                          name="password"
                          className="block w-full rounded border border-gray-200 px-5 py-3 leading-6 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                          errorClassName="rw-input-error block w-full rounded border border-gray-200 px-5 py-3 leading-6 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                          autoComplete="current-password"
                          validation={{
                            required: {
                              value: true,
                              message: 'Password is required',
                            },
                          }}
                        />
                        <FieldError
                          name="password"
                          className="rw-field-error"
                        />
                      </div>
                      <div>
                        <Submit className="inline-flex w-full items-center justify-center space-x-2 rounded border border-indigo-700 bg-indigo-700 px-4 py-3 font-semibold leading-6 text-white hover:border-indigo-800 hover:bg-indigo-800 hover:text-white focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:border-indigo-700 active:bg-indigo-700">
                          Sign In
                        </Submit>
                        <div className="mt-4 space-y-2 sm:flex sm:items-center sm:justify-between sm:space-x-2 sm:space-y-0">
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              id="remember_me"
                              name="remember_me"
                              className="h-4 w-4 rounded border border-gray-200 text-indigo-500 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                            />
                            <span className="ml-2">Remember me</span>
                          </label>
                          <Link
                            to={routes.forgotPassword()}
                            className="inline-block text-indigo-600 hover:text-indigo-400"
                          >
                            Forgot Password?
                          </Link>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
                <div className="w-full bg-gray-50 py-4 px-5 text-center text-sm lg:px-6">
                  Don’t have an account yet?
                  <Link
                    to={routes.signup()}
                    className="font-medium text-indigo-600 hover:text-indigo-400"
                  >
                    Join us today
                  </Link>
                </div>
              </div>
              {/* END Sign In Form */}

              {/* Footer */}
              <div className="mt-6 text-center text-sm text-gray-500"></div>
              {/* END Footer */}
            </div>
            {/* END Sign In Section */}
          </div>
        </main>
        {/* END Page Content */}
      </div>
      {/* END Page Container */}
    </>
  )
}

export default LoginPage
