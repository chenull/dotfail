import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PricingPage = () => {
  return (
    <>
      <MetaTags title="Pricing" description="Pricing page" />

      {/* Pricing Section: with featured plan */}
      <div className="container mx-auto space-y-10 px-4 pt-16 pb-16 lg:px-8 lg:pt-16 xl:max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <div className="mx-auto mb-10 flex h-20 w-20 rotate-12 items-center justify-center rounded-tl-3xl rounded-bl-xl rounded-br-3xl border-2 border-white bg-gradient-to-bl from-indigo-400 to-purple-400 text-white shadow-xl shadow-purple-500/25">
            <svg
              className="hi-outline hi-rocket inline-block h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
              />
            </svg>
          </div>
          <h2 className="mb-3 text-4xl font-black text-black md:text-5xl lg:mx-auto lg:w-2/3 lg:leading-tight">
            Choose the perfect plan for your{' '}
            <span className="text-indigo-600">online business</span>
          </h2>
          <h3 className="text-xl font-medium leading-relaxed text-gray-800 lg:mx-auto lg:w-3/5">
            Premium packages and solutions for your amazing startup. Inspiring
            results from day one without the struggle.
          </h3>
        </div>
        {/* END Heading */}
      </div>
      <div className="container mx-auto space-y-10 px-4 pb-16 lg:px-8 lg:pb-32 xl:max-w-7xl">
        {/* Pricing Plans */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-4">
          {/* Basic Plan */}
          <div className="flex flex-col lg:px-2 lg:pt-12 lg:pb-2">
            <div className="flex grow flex-col rounded-xl bg-white shadow-lg shadow-gray-300/40">
              <div className="space-y-5 rounded-t-lg p-6 text-center lg:p-8">
                <div>
                  <h4 className="mb-1 text-3xl font-extrabold">Basic</h4>
                  <p className="text-sm font-medium text-gray-500">
                    Starting a community
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-3xl font-bold lg:text-5xl">
                    <span className="align-top text-lg font-medium text-gray-500">
                      $
                    </span>
                    59
                  </p>
                  <p className="text-sm font-medium text-gray-500">per month</p>
                </div>
              </div>
              <div className="grow space-y-6 border-y border-gray-100 p-6 lg:space-y-8 lg:p-8">
                <ul className="space-y-5 text-sm font-medium text-gray-700">
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="hi-solid hi-check-circle inline-block h-6 w-6 text-green-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong>1</strong> Community
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="hi-solid hi-check-circle inline-block h-6 w-6 text-green-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong>5,000</strong> Members
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="hi-solid hi-check-circle inline-block h-6 w-6 text-green-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong>5</strong> Moderators
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="hi-solid hi-check-circle inline-block h-6 w-6 text-green-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong>5GB</strong> SSD Storage
                    </span>
                  </li>
                </ul>
              </div>
              <div className="p-6 lg:p-8">
                <a
                  href="#"
                  className="inline-flex w-full items-center justify-center space-x-2 rounded border border-gray-300 bg-white px-4 py-3 font-semibold leading-6 text-gray-800 shadow-sm hover:border-gray-300 hover:bg-gray-100 hover:text-gray-800 hover:shadow focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:border-white active:bg-white active:shadow-none"
                >
                  Choose Basic
                </a>
              </div>
            </div>
          </div>
          {/* END Basic Plan */}

          {/* Plus Plan */}
          <div className="flex flex-col overflow-hidden rounded-2xl bg-indigo-600 px-2 pb-2">
            <div className="flex h-12 items-center justify-center space-x-2 bg-indigo-600 font-semibold text-white">
              <span>Most Popular</span>
              <svg
                className="hi-mini hi-hand-thumb-up inline-block h-5 w-5 opacity-75"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z" />
              </svg>
            </div>
            <div className="group flex grow flex-col rounded-xl bg-white shadow-lg shadow-gray-700/40">
              <div className="space-y-5 rounded-t-lg p-6 text-center lg:p-8">
                <div>
                  <h4 className="mb-1 text-3xl font-extrabold">Plus</h4>
                  <p className="text-sm font-medium text-gray-500">
                    For large communities
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-3xl font-bold lg:text-5xl">
                    <span className="align-top text-lg font-medium text-gray-500">
                      $
                    </span>
                    249
                  </p>
                  <p className="text-sm font-medium text-gray-500">per month</p>
                </div>
              </div>
              <div className="grow space-y-6 border-y border-gray-100 p-6 lg:space-y-8 lg:p-8">
                <ul className="space-y-5 text-sm font-medium text-gray-700">
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="hi-solid hi-check-circle inline-block h-6 w-6 text-green-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong>10</strong> Communities
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="hi-solid hi-check-circle inline-block h-6 w-6 text-green-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong>50,000</strong> Members
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="hi-solid hi-check-circle inline-block h-6 w-6 text-green-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong>100</strong> Moderators
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="hi-solid hi-check-circle inline-block h-6 w-6 text-green-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong>50GB</strong> SSD Storage
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="hi-solid hi-check-circle inline-block h-6 w-6 text-green-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong>24/7</strong> Email Support
                    </span>
                  </li>
                </ul>
              </div>
              <div className="p-6 lg:p-8">
                <a
                  href="#"
                  className="inline-flex w-full items-center justify-center space-x-2 rounded border border-indigo-700 bg-indigo-700 px-4 py-3 font-semibold leading-6 text-white hover:border-indigo-800 hover:bg-indigo-800 hover:text-white focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:border-indigo-700 active:bg-indigo-700"
                >
                  Choose Plus
                </a>
              </div>
            </div>
          </div>
          {/* END Plus Plan */}

          {/* Custom Plan */}
          <div className="flex flex-col lg:px-2 lg:pt-12 lg:pb-2">
            <div className="flex grow flex-col rounded-xl bg-white shadow-lg shadow-gray-300/40">
              <div className="space-y-5 rounded-t-lg p-6 text-center lg:p-8">
                <div>
                  <h4 className="mb-1 text-3xl font-extrabold">Custom</h4>
                  <p className="text-sm font-medium text-gray-500">
                    Community Master
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-3xl font-bold lg:text-5xl">
                    <span className="align-top text-lg font-medium text-gray-500">
                      $
                    </span>
                    499+
                  </p>
                  <p className="text-sm font-medium text-gray-500">per month</p>
                </div>
              </div>
              <div className="grow space-y-6 border-y border-gray-100 p-6 lg:space-y-8 lg:p-8">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-gradient-to-t from-gray-400 to-gray-300 text-white shadow-xl">
                  <svg
                    className="hi-outline hi-rocket inline-block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                    />
                  </svg>
                </div>
                <p className="text-sm font-medium leading-relaxed text-gray-600">
                  Please contact us for all available options! We are able to
                  provide up to 1,000 communities per account.
                </p>
              </div>
              <div className="p-6 lg:p-8">
                <a
                  href="#"
                  className="inline-flex w-full items-center justify-center space-x-2 rounded border border-gray-300 bg-white px-4 py-3 font-semibold leading-6 text-gray-800 shadow-sm hover:border-gray-300 hover:bg-gray-100 hover:text-gray-800 hover:shadow focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:border-white active:bg-white active:shadow-none"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
          {/* END Custom Plan */}
        </div>
        {/* END Pricing Plans */}
      </div>
      {/* END Pricing Section: Subtle Gradients with Featured Plan */}
    </>
  )
}

export default PricingPage
