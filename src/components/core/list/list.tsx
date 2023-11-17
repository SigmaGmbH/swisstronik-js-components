import Avatar from '../avatar/avatar'

interface ListProps {
  items: any[]
}

export default function List({ items }: ListProps) {
  return (
    <ul className='w-129.25 font-medium text-gray-900 bg-white border border-neutral-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
      {items.map((item, index) => (
        <>
          <div
            key={index.toString()}
            className='w-full px-6 py-3 grid grid-rows-2 grid-flow-col gap-0.5  border-b border-neutral-200 rounded-t-lg dark:border-gray-600'
          >
            <div className={`row-span-2 ${item.img.length > 1 ? 'order-last' : 'order-first'}`}>
              <Avatar imgs={item.img} size={12} />
            </div>
            <div className='col-span-11 font-semibold text-neutral-900'>{item.fullname}</div>
            <div className='col-span-11 text-sm text-neutral-600 font-normal'>{item.email}</div>
          </div>
        </>
      ))}
    </ul>
  )
}
