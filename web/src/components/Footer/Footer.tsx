import { getYear } from 'date-fns'

import { Link } from '@redwoodjs/router'

const getCurrentYear = (): string => {
  const year = getYear(new Date(Date.now())).toString()
  return year
}

const Footer = () => {
  return (
    <div>
      {/* Page Footer */}
      <footer
        id="page-footer"
        className="flex flex-none items-center bg-white dark:bg-gray-800"
      >
        <div className="container mx-auto flex flex-col px-4 text-center text-sm md:flex-row md:justify-between md:text-left lg:px-8 xl:max-w-7xl">
          <div className="pt-4 pb-1 md:pb-4">
            <Link
              to="https://jcamp.cloud"
              className="font-medium text-indigo-600 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-300"
              target="_blank"
            >
              JC Cloud
            </Link>{' '}
            ©
          </div>
          <div className="inline-flex items-center justify-center pb-4 pt-1 md:pt-4">
            <span>Crafted with</span>
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="hi-solid hi-heart mx-1 inline-block h-4 w-4 text-red-600"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              {' '}
              by{' '}
              <Link
                to="https://jogjacamp.com"
                className="font-medium text-indigo-600 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-300"
                target="_blank"
              >
                JogjaCamp &copy;{getCurrentYear()}
              </Link>
            </span>
          </div>
        </div>
      </footer>
      {/* END Page Footer */}
    </div>
  )
}

export { Footer }
