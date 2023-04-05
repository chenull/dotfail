import { Link } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const BlogPage = () => {
  return (
    <>
      <MetaTags title="Blog" description="Blog page" />
      {/* Blog List Section: In Grid */}
      <div className="container mx-auto space-y-10 px-4 pt-16 pb-16 lg:px-8 lg:pt-16 xl:max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <div className="mx-auto mb-10 flex h-20 w-20 rotate-12 items-center justify-center rounded-tl-3xl rounded-bl-xl rounded-br-3xl border-2 border-white bg-gradient-to-bl from-indigo-400 to-purple-400 text-white shadow-xl shadow-purple-500/25">
            <svg
              className="hi-outline hi-document-text inline-block h-8 w-8"
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
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </div>
          <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
            Latest Posts
          </h2>
        </div>
        {/* END Heading */}
        {/* Blog Posts */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col items-center overflow-hidden rounded-lg bg-white shadow-sm">
            <Link to="#" className="group relative block">
              <div className="absolute inset-0 flex items-center justify-center bg-indigo-700 bg-opacity-75 opacity-0 transition duration-150 ease-out group-hover:opacity-100">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hi-solid hi-arrow-right inline-block h-10 w-10 -rotate-45 transform text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <img
                src="https://cdn.tailkit.com/media/placeholders/photo-73F4pKoUkM0-800x600.jpg"
                alt="Featured post"
              />
            </Link>
            <div className="p-5 lg:p-6">
              <div className="mb-3">
                <div className="inline-flex rounded-full bg-indigo-200 px-2 py-1 text-sm font-semibold leading-4 text-indigo-700">
                  travel
                </div>
                <div className="inline-flex rounded-full bg-indigo-200 px-2 py-1 text-sm font-semibold leading-4 text-indigo-700">
                  adventure
                </div>
              </div>
              <h4 className="mb-2 text-lg font-bold sm:text-xl">
                <Link
                  to="#"
                  className="leading-7 text-gray-800 hover:text-gray-600"
                >
                  The 10 best hiking trails in the world you should put in your
                  bucket list
                </Link>
              </h4>
              <p className="mb-3 text-sm font-medium text-gray-600">
                March 3, 2021 · 12 min read
              </p>
              <p className="prose prose-sm prose-indigo">
                Integer fermentum tincidunt auctor. Vestibulum ullamcorper, odio
                sed rhoncus imperdiet, enim elit sollicitudin orci, eget dictum
                leo mi nec lectus.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center overflow-hidden rounded-lg bg-white shadow-sm">
            <Link to="#" className="group relative block">
              <div className="absolute inset-0 flex items-center justify-center bg-indigo-700 bg-opacity-75 opacity-0 transition duration-150 ease-out group-hover:opacity-100">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hi-solid hi-arrow-right inline-block h-10 w-10 -rotate-45 transform text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <img
                src="https://cdn.tailkit.com/media/placeholders/photo-phIFdC6lA4E-800x600.jpg"
                alt="Featured post"
              />
            </Link>
            <div className="p-5 lg:p-6">
              <div className="mb-3">
                <div className="inline-flex rounded-full bg-indigo-200 px-2 py-1 text-sm font-semibold leading-4 text-indigo-700">
                  travel
                </div>
                <div className="inline-flex rounded-full bg-indigo-200 px-2 py-1 text-sm font-semibold leading-4 text-indigo-700">
                  astronomy
                </div>
              </div>
              <h4 className="mb-2 text-lg font-bold sm:text-xl">
                <Link
                  to="#"
                  className="leading-7 text-gray-800 hover:text-gray-600"
                >
                  The 20 best places in the world for star gazing
                </Link>
              </h4>
              <p className="mb-3 text-sm font-medium text-gray-600">
                February 23, 2021 · 20 min read
              </p>
              <p className="prose prose-sm prose-indigo">
                Integer fermentum tincidunt auctor. Vestibulum ullamcorper, odio
                sed rhoncus imperdiet, enim elit sollicitudin orci, eget dictum
                leo mi nec lectus.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center overflow-hidden rounded-lg bg-white shadow-sm">
            <Link to="#" className="group relative block">
              <div className="absolute inset-0 flex items-center justify-center bg-indigo-700 bg-opacity-75 opacity-0 transition duration-150 ease-out group-hover:opacity-100">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hi-solid hi-arrow-right inline-block h-10 w-10 -rotate-45 transform text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <img
                src="https://cdn.tailkit.com/media/placeholders/photo-T7K4aEPoGGk-800x600.jpg"
                alt="Featured post"
              />
            </Link>
            <div className="p-5 lg:p-6">
              <div className="mb-3">
                <div className="inline-flex rounded-full bg-indigo-200 px-2 py-1 text-sm font-semibold leading-4 text-indigo-700">
                  travel
                </div>
                <div className="inline-flex rounded-full bg-indigo-200 px-2 py-1 text-sm font-semibold leading-4 text-indigo-700">
                  adventure
                </div>
              </div>
              <h4 className="mb-2 text-lg font-bold sm:text-xl">
                <Link
                  to="#"
                  className="leading-7 text-gray-800 hover:text-gray-600"
                >
                  How to explore one of the most beautiful lakes in the whole
                  world
                </Link>
              </h4>
              <p className="mb-3 text-sm font-medium text-gray-600">
                February 15, 2021 · 5 min read
              </p>
              <p className="prose prose-sm prose-indigo">
                Integer fermentum tincidunt auctor. Vestibulum ullamcorper, odio
                sed rhoncus imperdiet, enim elit sollicitudin orci, eget dictum
                leo mi nec lectus.
              </p>
            </div>
          </div>
        </div>
        {/* END Blog Posts */}
      </div>
      {/* END Blog List Section: In Grid */}
    </>
  )
}

export default BlogPage
