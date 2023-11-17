import Icons from './icon-generator'

export default function PaginationItem({ content }: { content: string }) {
  return (
    <a
      href='#'
      className='hidden sm:inline-flex relative inline-flex items-center px-4 py-2 border border-neutral-200 bg-white text-sm font-medium text-neutral-600 hover:bg-gray-50'
    >
      <span className='sr-only'>Next</span>
      {content}
    </a>
  )
}
