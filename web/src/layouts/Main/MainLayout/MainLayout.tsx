import { Link } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/dist/toast'

import { Footer } from 'src/components/Footer/Footer'
import { NavBar } from 'src/components/NavBar/NavBar'

const MainLayout = ({ children }) => {
  return (
    <>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      {/* Page Container */}
      <div
        id="page-container"
        className="mx-auto flex min-h-screen w-full min-w-[320px] flex-col bg-gray-100 dark:bg-gray-900 dark:text-gray-100"
      >
        <NavBar />
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
