import { Link, routes } from '@redwoodjs/router'

type PublicLayoutProps = {
  children?: React.ReactNode
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <>
      {/* Page Container */}
      <div
        id="page-container"
        className="mx-auto flex min-h-screen w-full flex-col bg-gray-100"
      >
        {/* Section: Colorful Top Gradient With Header Links */}
        <div className="relative overflow-hidden bg-white">
          {/* Gradient Background */}
          <div className="absolute inset-0 flex">
            <div className="h-64 w-1/4 bg-gradient-to-r from-indigo-400 to-violet-400" />
            <div className="h-64 w-1/4 bg-gradient-to-r from-violet-400 to-red-400" />
            <div className="h-64 w-1/4 bg-gradient-to-r from-red-400 to-orange-400" />
            <div className="h-64 w-1/4 bg-gradient-to-r from-orange-400 to-amber-400" />
          </div>
          <div className="absolute inset-0">
            <div className="h-64 bg-gradient-to-b from-transparent to-white" />
          </div>
          {/* END Gradient Background */}

          {/* Header */}
          <header
            id="page-header"
            className="relative flex flex-none items-center bg-white bg-opacity-40 py-5 shadow-sm"
          >
            <div className="container mx-auto flex flex-col space-y-6 px-4 text-center md:flex-row md:items-center md:justify-between md:space-y-0 md:space-x-8 lg:px-10 xl:max-w-7xl">
              {/* Brand */}
              <div className="flex flex-none items-center justify-center">
                <Link
                  to={routes.home()}
                  className="inline-flex items-center space-x-2 text-lg font-semibold tracking-wide text-indigo-900 hover:text-indigo-700"
                >
                  <svg
                    className="hi-solid hi-fire inline-block h-5 w-5 text-indigo-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>IDweb App</span>
                </Link>
              </div>
              {/* END Brand */}
              <div className="flex grow flex-col space-y-6 text-center md:flex-row md:items-center md:justify-between md:space-y-0 md:space-x-8">
                {/* Navigation */}
                <nav className="space-x-3 md:space-x-6">
                  <Link
                    to={routes.appDashboard()}
                    className="text-sm font-semibold text-indigo-900 hover:text-indigo-700"
                  >
                    <span>Dashboard</span>
                  </Link>
                  <Link
                    to={routes.pricing()}
                    className="text-sm font-semibold text-indigo-900 hover:text-indigo-700"
                  >
                    <span>Pricing</span>
                  </Link>
                  <Link
                    to={routes.blog()}
                    className="text-sm font-semibold text-indigo-900 hover:text-indigo-700"
                  >
                    <span>Blog</span>
                  </Link>
                </nav>
                {/* END Navigation */}

                {/* Actions */}
                <div className="flex items-center justify-center space-x-2">
                  <Link
                    to={routes.login()}
                    className="inline-flex items-center justify-center space-x-2 rounded border border-indigo-700 bg-indigo-700 px-3 py-2 text-sm font-semibold leading-5 text-white hover:border-indigo-800 hover:bg-indigo-800 hover:text-white focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:border-indigo-700 active:bg-indigo-700"
                  >
                    <svg
                      className="hi-solid hi-shopping-cart inline-block h-4 w-4 opacity-50"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <span>Sign In</span>
                  </Link>
                </div>
                {/* END Actions */}
              </div>
            </div>
          </header>
          {/* END Header */}
          {children}
        </div>
        {/* END Section: Colorful Top Gradient With Header Links */}
        {/* Footer Section: With Links Info Newsletter */}
        <footer id="page-footer" className="bg-gray-100">
          <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              <div className="space-y-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Products
                </h4>
                <nav className="flex flex-col space-y-3">
                  <Link
                    to="#"
                    className="font-medium text-gray-600 hover:text-gray-500"
                  >
                    Solutions
                  </Link>
                  <Link
                    to="#"
                    className="font-medium text-gray-600 hover:text-gray-500"
                  >
                    Features
                  </Link>
                  <Link
                    to="#"
                    className="font-medium text-gray-600 hover:text-gray-500"
                  >
                    Pricing Plans
                  </Link>
                  <Link
                    to="#"
                    className="font-medium text-gray-600 hover:text-gray-500"
                  >
                    Analytics
                  </Link>
                  <Link
                    to="#"
                    className="font-medium text-gray-600 hover:text-gray-500"
                  >
                    Support Center
                  </Link>
                </nav>
              </div>
              <div className="space-y-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Legal
                </h4>
                <nav className="flex flex-col space-y-3">
                  <Link
                    to="#"
                    className="font-medium text-gray-600 hover:text-gray-500"
                  >
                    Team
                  </Link>
                  <Link
                    to="#"
                    className="font-medium text-gray-600 hover:text-gray-500"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    to="#"
                    className="font-medium text-gray-600 hover:text-gray-500"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="#"
                    className="font-medium text-gray-600 hover:text-gray-500"
                  >
                    Cookies
                  </Link>
                  <Link
                    to="#"
                    className="font-medium text-gray-600 hover:text-gray-500"
                  >
                    Refunds
                  </Link>
                </nav>
              </div>
              <div className="space-y-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Company Inc
                </h4>
                <div className="text-sm leading-relaxed">
                  1080 Sunshine Valley, Suite 2563
                  <br />
                  San Francisco, CA 85214
                  <br />
                  <abbr title="Phone">P:</abbr> (123) 456-7890
                </div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Join Our Newsletter
                </h4>
                <form className="space-y-3 sm:flex sm:items-center sm:space-y-0 sm:space-x-2">
                  <div className="sm:grow">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      className="block w-full rounded border border-gray-200 py-2 text-sm leading-5 placeholder-gray-400 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center space-x-2 rounded border border-indigo-700 bg-indigo-700 px-3 py-2 text-sm font-semibold leading-5 text-white hover:border-indigo-800 hover:bg-indigo-800 hover:text-white focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:border-indigo-700 active:bg-indigo-700"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <hr className="my-10" />
            <div className="flex flex-col space-y-6 text-center text-sm md:flex-row-reverse md:justify-between md:space-y-0 md:text-left">
              <nav className="space-x-4">
                <Link to="#" className="text-gray-400 hover:text-indigo-600">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon-twitter inline-block h-5 w-5"
                  >
                    <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" />
                  </svg>
                </Link>
                <Link to="#" className="text-gray-400 hover:text-indigo-600">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon-facebook inline-block h-5 w-5"
                  >
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
                  </svg>
                </Link>
                <Link to="#" className="text-gray-400 hover:text-indigo-600">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon-instagram inline-block h-5 w-5"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </Link>
              </nav>
              <div className="text-gray-500">
                <span className="font-medium">Company Inc</span> ©
              </div>
            </div>
          </div>
        </footer>
        {/* END Footer Section: With Links Info Newsletter */}
      </div>
    </>
  )
}

export { PublicLayout }
