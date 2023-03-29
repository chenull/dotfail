import { Fragment, useState } from 'react'

import { Menu, Transition } from '@headlessui/react'

import { Link } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/dist/toast'

import { Footer } from 'src/components/Footer/Footer'

const MainLayout = ({ children }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  return (
    <>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      {/* Page Container */}
      <div
        id="page-container"
        className="mx-auto flex min-h-screen w-full min-w-[320px] flex-col bg-gray-100 dark:bg-gray-900 dark:text-gray-100"
      >
        {/* Page Header */}
        <header
          id="page-header"
          className="z-1 flex flex-none items-center bg-indigo-900 shadow-sm"
        >
          <div className="container mx-auto px-4 lg:px-8 xl:max-w-7xl">
            <div className="flex justify-between py-4">
              {/* Left Section */}
              <div className="dark flex items-center space-x-2 lg:space-x-6">
                {/* Logo */}
                <Link
                  to="#"
                  className="group inline-flex items-center space-x-2 text-lg font-bold tracking-wide text-gray-700 hover:text-indigo-600 active:text-gray-700 dark:font-semibold dark:text-white dark:hover:text-indigo-400 dark:active:text-white"
                >
                  <svg
                    className="hi-mini hi-cube-transparent inline-block h-5 w-5 text-indigo-600 transition group-hover:scale-110 dark:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.638 1.093a.75.75 0 01.724 0l2 1.104a.75.75 0 11-.724 1.313L10 2.607l-1.638.903a.75.75 0 11-.724-1.313l2-1.104zM5.403 4.287a.75.75 0 01-.295 1.019l-.805.444.805.444a.75.75 0 01-.724 1.314L3.5 7.02v.73a.75.75 0 01-1.5 0v-2a.75.75 0 01.388-.657l1.996-1.1a.75.75 0 011.019.294zm9.194 0a.75.75 0 011.02-.295l1.995 1.101A.75.75 0 0118 5.75v2a.75.75 0 01-1.5 0v-.73l-.884.488a.75.75 0 11-.724-1.314l.806-.444-.806-.444a.75.75 0 01-.295-1.02zM7.343 8.284a.75.75 0 011.02-.294L10 8.893l1.638-.903a.75.75 0 11.724 1.313l-1.612.89v1.557a.75.75 0 01-1.5 0v-1.557l-1.612-.89a.75.75 0 01-.295-1.019zM2.75 11.5a.75.75 0 01.75.75v1.557l1.608.887a.75.75 0 01-.724 1.314l-1.996-1.101A.75.75 0 012 14.25v-2a.75.75 0 01.75-.75zm14.5 0a.75.75 0 01.75.75v2a.75.75 0 01-.388.657l-1.996 1.1a.75.75 0 11-.724-1.313l1.608-.887V12.25a.75.75 0 01.75-.75zm-7.25 4a.75.75 0 01.75.75v.73l.888-.49a.75.75 0 01.724 1.313l-2 1.104a.75.75 0 01-.724 0l-2-1.104a.75.75 0 11.724-1.313l.888.49v-.73a.75.75 0 01.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Company</span>
                </Link>
                {/* END Logo */}

                {/* Desktop Navigation */}
                <nav className="hidden items-center space-x-2 lg:flex">
                  <Link
                    to="#"
                    className="group flex items-center space-x-2 rounded-lg border border-indigo-100 bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 dark:border-indigo-500 dark:border-opacity-20 dark:bg-indigo-500 dark:bg-opacity-20 dark:text-indigo-100"
                  >
                    <span>Dashboard</span>
                  </Link>
                  <Link
                    to="#"
                    className="group flex items-center space-x-2 rounded-lg border border-transparent px-3 py-2 text-sm font-semibold text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 active:border-indigo-100 dark:text-gray-100 dark:hover:bg-indigo-500 dark:hover:bg-opacity-20 dark:hover:text-indigo-100 dark:active:border-indigo-500 dark:active:border-opacity-25"
                  >
                    <span>Customers</span>
                  </Link>
                  <Link
                    to="#"
                    className="group flex items-center space-x-2 rounded-lg border border-transparent px-3 py-2 text-sm font-semibold text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 active:border-indigo-100 dark:text-gray-100 dark:hover:bg-indigo-500 dark:hover:bg-opacity-20 dark:hover:text-indigo-100 dark:active:border-indigo-500 dark:active:border-opacity-25"
                  >
                    <span>Projects</span>
                  </Link>
                  <Link
                    to="#"
                    className="group flex items-center space-x-2 rounded-lg border border-transparent px-3 py-2 text-sm font-semibold text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 active:border-indigo-100 dark:text-gray-100 dark:hover:bg-indigo-500 dark:hover:bg-opacity-20 dark:hover:text-indigo-100 dark:active:border-indigo-500 dark:active:border-opacity-25"
                  >
                    <span>Sales</span>
                  </Link>
                </nav>
                {/* END Desktop Navigation */}
              </div>
              {/* END Left Section */}

              {/* Right Section */}
              <div className="flex items-center space-x-2">
                {/* Notifications */}
                <div className="dark">
                  <Link
                    to="#"
                    className="inline-flex items-center justify-center space-x-2 rounded-lg border border-indigo-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-indigo-800 hover:border-indigo-300 hover:text-indigo-900 hover:shadow-sm focus:ring focus:ring-indigo-300 focus:ring-opacity-25 active:border-indigo-200 active:shadow-none dark:border-indigo-700 dark:bg-indigo-900 dark:text-indigo-200 dark:hover:border-indigo-600 dark:hover:text-indigo-100 dark:focus:ring-indigo-600 dark:focus:ring-opacity-40 dark:active:border-indigo-700"
                  >
                    <svg
                      className="hi-outline hi-bell-alert inline-block h-5 w-5"
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
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                      />
                    </svg>
                  </Link>
                </div>
                {/* END Notifications */}

                {/* User Dropdown */}
                <Menu as="div" className="relative inline-block">
                  {/* Dropdown Toggle Button */}
                  <div className="dark">
                    <Menu.Button className="inline-flex items-center justify-center space-x-2 rounded-lg border border-indigo-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-indigo-800 hover:border-indigo-300 hover:text-indigo-900 hover:shadow-sm focus:ring focus:ring-indigo-300 focus:ring-opacity-25 active:border-indigo-200 active:shadow-none dark:border-indigo-700 dark:bg-indigo-900 dark:text-indigo-200 dark:hover:border-indigo-600 dark:hover:text-indigo-100 dark:focus:ring-indigo-600 dark:focus:ring-opacity-40 dark:active:border-indigo-700">
                      <svg
                        className="hi-mini hi-user-circle inline-block h-5 w-5 sm:hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="hidden sm:inline">John</span>
                      <svg
                        className="hi-mini hi-chevron-down hidden h-5 w-5 opacity-40 sm:inline-block"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Menu.Button>
                  </div>
                  {/* END Dropdown Toggle Button */}

                  {/* Dropdown */}
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="opacity-0 scale-90"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-90"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-lg shadow-xl focus:outline-none dark:shadow-gray-900">
                      <div className="divide-y divide-gray-100 rounded-lg bg-white ring-1 ring-black ring-opacity-5 dark:divide-gray-700 dark:bg-gray-800 dark:ring-gray-700">
                        <div className="space-y-1 p-2.5">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="#"
                                className={`group flex items-center justify-between space-x-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium ${
                                  active
                                    ? 'border-indigo-100 bg-indigo-50 text-indigo-800 dark:border-indigo-500 dark:border-opacity-25 dark:bg-indigo-500 dark:bg-opacity-20 dark:text-indigo-100'
                                    : 'hover:bg-indigo-50 hover:text-indigo-800 active:border-indigo-100 dark:text-gray-300 dark:hover:bg-indigo-500 dark:hover:bg-opacity-20 dark:hover:text-indigo-100 dark:active:border-indigo-500 dark:active:border-opacity-25'
                                }`}
                              >
                                <svg
                                  className="hi-mini hi-inbox inline-block h-5 w-5 flex-none opacity-25 group-hover:opacity-50"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M1 11.27c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 015.273 3h9.454a2.75 2.75 0 012.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 01-2 2H3a2 2 0 01-2-2v-3.73zm3.068-5.852A1.25 1.25 0 015.273 4.5h9.454a1.25 1.25 0 011.205.918l1.523 5.52c.006.02.01.041.015.062H14a1 1 0 00-.86.49l-.606 1.02a1 1 0 01-.86.49H8.236a1 1 0 01-.894-.553l-.448-.894A1 1 0 006 11H2.53l.015-.062 1.523-5.52z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="grow">Inbox</span>
                                <div className="inline-flex rounded-full border border-indigo-200 bg-indigo-100 px-1.5 py-0.5 text-xs font-semibold leading-4 text-indigo-700 dark:border-indigo-700 dark:bg-indigo-800 dark:text-indigo-50">
                                  2
                                </div>
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="#"
                                className={`group flex items-center justify-between space-x-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium ${
                                  active
                                    ? 'border-indigo-100 bg-indigo-50 text-indigo-800 dark:border-indigo-500 dark:border-opacity-25 dark:bg-indigo-500 dark:bg-opacity-20 dark:text-indigo-100'
                                    : 'hover:bg-indigo-50 hover:text-indigo-800 active:border-indigo-100 dark:text-gray-300 dark:hover:bg-indigo-500 dark:hover:bg-opacity-20 dark:hover:text-indigo-100 dark:active:border-indigo-500 dark:active:border-opacity-25'
                                }`}
                              >
                                <svg
                                  className="hi-mini hi-flag inline-block h-5 w-5 flex-none opacity-25 group-hover:opacity-50"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path d="M3.5 2.75a.75.75 0 00-1.5 0v14.5a.75.75 0 001.5 0v-4.392l1.657-.348a6.449 6.449 0 014.271.572 7.948 7.948 0 005.965.524l2.078-.64A.75.75 0 0018 12.25v-8.5a.75.75 0 00-.904-.734l-2.38.501a7.25 7.25 0 01-4.186-.363l-.502-.2a8.75 8.75 0 00-5.053-.439l-1.475.31V2.75z" />
                                </svg>
                                <span className="grow">Notifications</span>
                                <div className="inline-flex rounded-full border border-indigo-200 bg-indigo-100 px-1.5 py-0.5 text-xs font-semibold leading-4 text-indigo-700 dark:border-indigo-700 dark:bg-indigo-800 dark:text-indigo-50">
                                  5
                                </div>
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="space-y-1 p-2.5">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="#"
                                className={`group flex items-center justify-between space-x-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium ${
                                  active
                                    ? 'border-indigo-100 bg-indigo-50 text-indigo-800 dark:border-indigo-500 dark:border-opacity-25 dark:bg-indigo-500 dark:bg-opacity-20 dark:text-indigo-100'
                                    : 'hover:bg-indigo-50 hover:text-indigo-800 active:border-indigo-100 dark:text-gray-300 dark:hover:bg-indigo-500 dark:hover:bg-opacity-20 dark:hover:text-indigo-100 dark:active:border-indigo-500 dark:active:border-opacity-25'
                                }`}
                              >
                                <svg
                                  className="hi-mini hi-user-circle inline-block h-5 w-5 flex-none opacity-25 group-hover:opacity-50"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="grow">Account</span>
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="#"
                                className={`group flex items-center justify-between space-x-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium ${
                                  active
                                    ? 'border-indigo-100 bg-indigo-50 text-indigo-800 dark:border-indigo-500 dark:border-opacity-25 dark:bg-indigo-500 dark:bg-opacity-20 dark:text-indigo-100'
                                    : 'hover:bg-indigo-50 hover:text-indigo-800 active:border-indigo-100 dark:text-gray-300 dark:hover:bg-indigo-500 dark:hover:bg-opacity-20 dark:hover:text-indigo-100 dark:active:border-indigo-500 dark:active:border-opacity-25'
                                }`}
                              >
                                <svg
                                  className="hi-mini hi-cog-6-tooth inline-block h-5 w-5 flex-none opacity-25 group-hover:opacity-50"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="grow">Settings</span>
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="space-y-1 p-2.5">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="#"
                                className={`group flex items-center justify-between space-x-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium ${
                                  active
                                    ? 'border-indigo-100 bg-indigo-50 text-indigo-800 dark:border-indigo-500 dark:border-opacity-25 dark:bg-indigo-500 dark:bg-opacity-20 dark:text-indigo-100'
                                    : 'hover:bg-indigo-50 hover:text-indigo-800 active:border-indigo-100 dark:text-gray-300 dark:hover:bg-indigo-500 dark:hover:bg-opacity-20 dark:hover:text-indigo-100 dark:active:border-indigo-500 dark:active:border-opacity-25'
                                }`}
                              >
                                <svg
                                  className="hi-mini hi-lock-closed inline-block h-5 w-5 flex-none opacity-25 group-hover:opacity-50"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="grow">Sign out</span>
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                      </div>
                    </Menu.Items>
                  </Transition>
                  {/* END Dropdown */}
                </Menu>
                {/* END User Dropdown */}

                {/* Toggle Mobile Navigation */}
                <div className="dark lg:hidden">
                  <button
                    onClick={() => setMobileNavOpen(!mobileNavOpen)}
                    type="button"
                    className="inline-flex items-center justify-center space-x-2 rounded-lg border border-indigo-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-indigo-800 hover:border-indigo-300 hover:text-indigo-900 hover:shadow-sm focus:ring focus:ring-indigo-300 focus:ring-opacity-25 active:border-indigo-200 active:shadow-none dark:border-indigo-700 dark:bg-indigo-900 dark:text-indigo-200 dark:hover:border-indigo-600 dark:hover:text-indigo-100 dark:focus:ring-indigo-600 dark:focus:ring-opacity-40 dark:active:border-indigo-700"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hi-solid hi-menu inline-block h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                {/* END Toggle Mobile Navigation */}
              </div>
              {/* END Right Section */}
            </div>

            {/* Mobile Navigation */}
            <div className={`dark lg:hidden ${mobileNavOpen ? '' : 'hidden'}`}>
              <nav className="flex flex-col space-y-2 border-t py-4 dark:border-white/10">
                <Link
                  to="#"
                  className="group flex items-center space-x-2 rounded-lg border border-indigo-50 bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 dark:border-indigo-500 dark:border-opacity-20 dark:bg-indigo-500 dark:bg-opacity-20 dark:text-indigo-100"
                >
                  <span>Dashboard</span>
                </Link>
                <Link
                  to="#"
                  className="group flex items-center space-x-2 rounded-lg border border-transparent px-3 py-2 text-sm font-semibold text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 active:border-indigo-100 dark:text-gray-100 dark:hover:bg-indigo-500 dark:hover:bg-opacity-20 dark:hover:text-indigo-100 dark:active:border-indigo-500 dark:active:border-opacity-25"
                >
                  <span>Customers</span>
                </Link>
                <Link
                  to="#"
                  className="group flex items-center space-x-2 rounded-lg border border-transparent px-3 py-2 text-sm font-semibold text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 active:border-indigo-100 dark:text-gray-100 dark:hover:bg-indigo-500 dark:hover:bg-opacity-20 dark:hover:text-indigo-100 dark:active:border-indigo-500 dark:active:border-opacity-25"
                >
                  <span>Projects</span>
                </Link>
                <Link
                  to="#"
                  className="group flex items-center space-x-2 rounded-lg border border-transparent px-3 py-2 text-sm font-semibold text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 active:border-indigo-100 dark:text-gray-100 dark:hover:bg-indigo-500 dark:hover:bg-opacity-20 dark:hover:text-indigo-100 dark:active:border-indigo-500 dark:active:border-opacity-25"
                >
                  <span>Sales</span>
                </Link>
              </nav>
            </div>
            {/* END Mobile Navigation */}
          </div>
        </header>
        {/* END Page Header */}

        {/* Page Content */}
        <main id="page-content" className="flex max-w-full flex-auto flex-col">
          {/* Page Heading */}
          <div className="bg-gray-50 dark:bg-gray-800/50">
            <div className="container mx-auto p-4 lg:p-8 xl:max-w-7xl">
              <div className="space-y-2 py-2 text-center sm:flex sm:items-center sm:justify-between sm:space-y-0 sm:text-left lg:py-0">
                <div className="grow">
                  <h1 className="mb-1 text-xl font-bold">Dashboard</h1>
                  <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Welcome{' '}
                    <Link
                      to="#"
                      className="text-indigo-600 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      John
                    </Link>
                    , everything seems great!
                  </h2>
                </div>
                <div className="flex flex-none items-center justify-center space-x-2 rounded py-3 px-2 sm:justify-end sm:bg-transparent sm:px-0">
                  <Link
                    to="#"
                    className="inline-flex items-center justify-center space-x-2 rounded-lg border border-indigo-700 bg-indigo-700 px-3 py-2 text-sm font-semibold leading-5 text-white hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:ring focus:ring-indigo-400 focus:ring-opacity-50 active:border-indigo-700 active:bg-indigo-700 dark:focus:ring-indigo-400 dark:focus:ring-opacity-90"
                  >
                    <svg
                      className="hi-mini hi-plus inline-block h-5 w-5 opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                    <span>New Project</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* END Page Heading */}

          {/* Page Section */}
          <div className="container mx-auto p-4 lg:p-8 xl:max-w-7xl">
            {/*

            ADD YOUR MAIN CONTENT BELOW

            */}

            {/* Placeholder */}
            <div className="flex items-center justify-center rounded-xl border-0 bg-gray-50 py-64 text-gray-400 dark:border-gray-700 dark:bg-gray-800">
              {children}
            </div>

            {/*

            ADD YOUR MAIN CONTENT ABOVE

            */}
          </div>
          {/* END Page Section */}
        </main>
        {/* END Page Content */}
      </div>
      {/* END Page Container */}

      <Footer />
    </>
  )
}

export { MainLayout }
