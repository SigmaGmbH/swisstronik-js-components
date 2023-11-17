/* This example requires Tailwind CSS v2.0+ */
//import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

import Icons from './icon-generator'
import PaginationItem from './pagination-item'

export default function Pagination() {
  return (
    <div className='bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'>
      <div className='sm:items-center sm:justify-between'>
        <div>
          <nav
            className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
            aria-label='Pagination'
          >
            <a
              href='#'
              className='relative inline-flex items-center px-4 py-4 rounded-l-md border border-neutral-200 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
            >
              <span className='sr-only'>Previous</span>
              <Icons
                name='chevron'
                color={`neutral-600`}
                size='20px'
                className={` transform rotate-90 top-4 left-6`}
              />
            </a>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}

            <PaginationItem content='1' />
            <PaginationItem content='2' />
            <PaginationItem content='3' />
            <PaginationItem content='4' />
            <PaginationItem content='...' />
            <PaginationItem content='11' />
            <PaginationItem content='12' />
            <PaginationItem content='13' />
            <PaginationItem content='14' />
            <a
              href='#'
              className='relative inline-flex items-center px-4 py-4 rounded-r-md border border-neutral-200 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
            >
              <span className='sr-only'>Previous</span>
              <Icons
                name='chevron'
                color={`neutral-600`}
                size='20px'
                className={` transform -rotate-90 top-4 left-6`}
              />
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
