import { Tab } from '@headlessui/react'

export default function TabItem({
  elements,
  className,
  id,
}: {
  elements: any
  className?: string
  id: string
}) {
  return (
    <>
      <Tab
        id={id}
        className={({ selected }) =>
          selected
            ? `text-error-500 font-bold text-sm border-b border-error-500 ${className}`
            : 'text-neutral-700 font-bold text-sm'
        }
      >
        {elements}
      </Tab>
    </>
  )
}
