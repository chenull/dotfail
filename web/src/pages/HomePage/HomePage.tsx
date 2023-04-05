import { Link } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      {/* Hero Content */}
      <div className="container relative mx-auto px-4 py-16 text-center lg:px-8 lg:py-32 xl:max-w-7xl">
        <div className="mb-2 inline-flex rounded border border-amber-300 bg-amber-200 px-2 py-1 text-sm font-semibold leading-4 text-amber-700">
          New UI components are now in!
        </div>
        <div className="mx-auto my-10 flex h-24 w-24 -rotate-6 items-center justify-center rounded-full border border-indigo-800 bg-indigo-600 text-white ring-4 ring-indigo-300">
          <svg
            className="hi-solid hi-fire inline-block h-10 w-10"
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
        </div>
        <h1 className="mb-4 text-3xl font-extrabold md:text-4xl">
          Premium and high quality UI components
        </h1>
        <h2 className="mx-auto text-lg font-medium text-gray-600 md:text-xl md:leading-relaxed lg:w-2/3">
          Build amazing websites and dashboards with our vast collection of
          carefully designed UI components. Improve your skills and put together
          better
        </h2>
        <div className="flex flex-col space-y-2 py-10 sm:flex-row sm:items-center sm:justify-center sm:space-y-0 sm:space-x-2">
          <Link
            to="#"
            className="inline-flex items-center justify-center space-x-2 rounded border border-gray-700 bg-gray-700 px-4 py-3 font-semibold leading-6 text-white hover:border-gray-800 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:border-gray-700 active:bg-gray-700"
          >
            <span>Get Started</span>
            <svg
              className="hi-solid hi-arrow-right inline-block h-5 w-5 opacity-50"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link
            to="#"
            className="inline-flex items-center justify-center space-x-2 rounded border border-gray-300 bg-white px-4 py-3 font-semibold leading-6 text-gray-800 hover:border-gray-300 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:border-white active:bg-white"
          >
            <span>Live Preview</span>
          </Link>
        </div>
      </div>
      {/* END Hero Content */}
      {/* Features Section: Modern Alternate With Icons */}
      <div className="bg-gray-100">
        <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          {/* Heading */}
          <div className="text-center">
            <div className="mb-1 text-sm font-bold uppercase tracking-wider text-blue-700">
              Created with passion
            </div>
            <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
              The best tech under the hood
            </h2>
            <h3 className="mx-auto text-lg font-medium text-gray-600 md:text-xl md:leading-relaxed lg:w-2/3">
              Build user friendly and modern dashboards using the latest tech.
              Now is the time with a best selling UI framework.
            </h3>
          </div>
          {/* END Heading */}

          {/* Features */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            <div className="group rounded-2xl border border-transparent p-5 transition duration-200 ease-out hover:border-gray-200">
              <div className="text-center">
                <div className="relative m-5 mb-12 inline-flex h-12 w-12 items-center justify-center">
                  <div className="absolute inset-0 -m-5 rotate-3 transform rounded-3xl bg-orange-300 transition duration-200 ease-out group-hover:-rotate-3 group-hover:scale-105 group-hover:shadow-lg" />
                  <div className="absolute inset-0 -m-2 -rotate-3 transform rounded-2xl bg-orange-700 bg-opacity-75 shadow-inner transition duration-200 ease-out group-hover:rotate-2 group-hover:scale-105" />
                  <svg
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hi-outline hi-adjustments relative inline-block h-8 w-8 transform text-white transition duration-200 ease-out group-hover:scale-110"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
              </div>
              <h4 className="mb-2 text-center text-lg font-bold">
                Customizable
              </h4>
              <p className="leading-relaxed text-gray-600">
                Fusce purus nisi, gravida sed consectetur ut, interdum quis
                nisi. Quisque egestas nisl id lectus facilisis scelerisque.
                Proin rhoncus dui at ligula vestibulum ut facilisis.
              </p>
            </div>
            <div className="group rounded-2xl border border-transparent p-5 transition duration-200 ease-out hover:border-gray-200">
              <div className="text-center">
                <div className="relative m-5 mb-12 inline-flex h-12 w-12 items-center justify-center">
                  <div className="absolute inset-0 -m-5 rotate-3 transform rounded-3xl bg-red-300 transition duration-200 ease-out group-hover:-rotate-3 group-hover:scale-105 group-hover:shadow-lg" />
                  <div className="absolute inset-0 -m-2 -rotate-3 transform rounded-2xl bg-red-700 bg-opacity-75 shadow-inner transition duration-200 ease-out group-hover:rotate-2 group-hover:scale-105" />
                  <svg
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hi-outline hi-chart-pie relative inline-block h-8 w-8 transform text-white transition duration-200 ease-out group-hover:scale-110"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                    />
                  </svg>
                </div>
              </div>
              <h4 className="mb-2 text-center text-lg font-bold">
                Rich Statistics
              </h4>
              <p className="leading-relaxed text-gray-600">
                Fusce purus nisi, gravida sed consectetur ut, interdum quis
                nisi. Quisque egestas nisl id lectus facilisis scelerisque.
                Proin rhoncus dui at ligula vestibulum ut facilisis.
              </p>
            </div>
            <div className="group rounded-2xl border border-transparent p-5 transition duration-200 ease-out hover:border-gray-200">
              <div className="text-center">
                <div className="relative m-5 mb-12 inline-flex h-12 w-12 items-center justify-center">
                  <div className="absolute inset-0 -m-5 rotate-3 transform rounded-3xl bg-emerald-300 transition duration-200 ease-out group-hover:-rotate-3 group-hover:scale-105 group-hover:shadow-lg" />
                  <div className="absolute inset-0 -m-2 -rotate-3 transform rounded-2xl bg-emerald-700 bg-opacity-75 shadow-inner transition duration-200 ease-out group-hover:rotate-2 group-hover:scale-105" />
                  <svg
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hi-outline hi-globe relative inline-block h-8 w-8 transform text-white transition duration-200 ease-out group-hover:scale-110"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h4 className="mb-2 text-center text-lg font-bold">
                Works globally
              </h4>
              <p className="leading-relaxed text-gray-600">
                Fusce purus nisi, gravida sed consectetur ut, interdum quis
                nisi. Quisque egestas nisl id lectus facilisis scelerisque.
                Proin rhoncus dui at ligula vestibulum ut facilisis.
              </p>
            </div>
            <div className="group rounded-2xl border border-transparent p-5 transition duration-200 ease-out hover:border-gray-200">
              <div className="text-center">
                <div className="relative m-5 mb-12 inline-flex h-12 w-12 items-center justify-center">
                  <div className="absolute inset-0 -m-5 rotate-3 transform rounded-3xl bg-purple-300 transition duration-200 ease-out group-hover:-rotate-3 group-hover:scale-105 group-hover:shadow-lg" />
                  <div className="absolute inset-0 -m-2 -rotate-3 transform rounded-2xl bg-purple-700 bg-opacity-75 shadow-inner transition duration-200 ease-out group-hover:rotate-2 group-hover:scale-105" />
                  <svg
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hi-outline hi-lightning-bolt relative inline-block h-8 w-8 transform text-white transition duration-200 ease-out group-hover:scale-110"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <h4 className="mb-2 text-center text-lg font-bold">
                Lighting fast UI
              </h4>
              <p className="leading-relaxed text-gray-600">
                Fusce purus nisi, gravida sed consectetur ut, interdum quis
                nisi. Quisque egestas nisl id lectus facilisis scelerisque.
                Proin rhoncus dui at ligula vestibulum ut facilisis.
              </p>
            </div>
            <div className="group rounded-2xl border border-transparent p-5 transition duration-200 ease-out hover:border-gray-200">
              <div className="text-center">
                <div className="relative m-5 mb-12 inline-flex h-12 w-12 items-center justify-center">
                  <div className="absolute inset-0 -m-5 rotate-3 transform rounded-3xl bg-blue-300 transition duration-200 ease-out group-hover:-rotate-3 group-hover:scale-105 group-hover:shadow-lg" />
                  <div className="absolute inset-0 -m-2 -rotate-3 transform rounded-2xl bg-blue-700 bg-opacity-75 shadow-inner transition duration-200 ease-out group-hover:rotate-2 group-hover:scale-105" />
                  <svg
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hi-outline hi-puzzle relative inline-block h-8 w-8 transform text-white transition duration-200 ease-out group-hover:scale-110"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                    />
                  </svg>
                </div>
              </div>
              <h4 className="mb-2 text-center text-lg font-bold">Components</h4>
              <p className="leading-relaxed text-gray-600">
                Fusce purus nisi, gravida sed consectetur ut, interdum quis
                nisi. Quisque egestas nisl id lectus facilisis scelerisque.
                Proin rhoncus dui at ligula vestibulum ut facilisis.
              </p>
            </div>
            <div className="group rounded-2xl border border-transparent p-5 transition duration-200 ease-out hover:border-gray-200">
              <div className="text-center">
                <div className="relative m-5 mb-12 inline-flex h-12 w-12 items-center justify-center">
                  <div className="absolute inset-0 -m-5 rotate-3 transform rounded-3xl bg-pink-300 transition duration-200 ease-out group-hover:-rotate-3 group-hover:scale-105 group-hover:shadow-lg" />
                  <div className="absolute inset-0 -m-2 -rotate-3 transform rounded-2xl bg-pink-700 bg-opacity-75 shadow-inner transition duration-200 ease-out group-hover:rotate-2 group-hover:scale-105" />
                  <svg
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hi-outline hi-users relative inline-block h-8 w-8 transform text-white transition duration-200 ease-out group-hover:scale-110"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
              </div>
              <h4 className="mb-2 text-center text-lg font-bold">Auto Auth</h4>
              <p className="leading-relaxed text-gray-600">
                Fusce purus nisi, gravida sed consectetur ut, interdum quis
                nisi. Quisque egestas nisl id lectus facilisis scelerisque.
                Proin rhoncus dui at ligula vestibulum ut facilisis.
              </p>
            </div>
          </div>
          {/* END Features */}
        </div>
      </div>
      {/* END Features Section: Modern Alternate With Icons */}
    </>
  )
}

export default HomePage
