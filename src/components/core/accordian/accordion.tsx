import { Disclosure } from '@headlessui/react'
import Icons from '../icon-generator'

interface AccordionProps {
  data: any[]
}

export default function Accordion({ data }: AccordionProps) {
  return (
    <div className='w-full px-4 pt-16'>
      <div className='w-full max-w-md mx-auto bg-white rounded-md border border-neutral-300 overflow-hidden'>
        {data.map((item, index) => (
          <Disclosure key={index.toString()} as='div' className='accordion-item'>
            {({ open }) => (
              <>
                <Disclosure.Button
                  disabled={item.isDisabled}
                  className='accordion-item-element flex justify-between w-full px-3 py-3 text-sm font-medium text-left text-purple-900 bg-white hover:bg-neutral-50 disabled:text-neutral-400 disabled:hover:bg-white disabled:bg-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
                >
                  <span>{item.header}</span>
                  <Icons
                    name='chevron'
                    color={`${item.isDisabled ? 'text-neutral-400' : 'text-black'}`}
                    ratio={1.5}
                    className={`inline  my-auto ${open ? 'transform rotate-180' : ''}`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className='accordion-item-element px-4 pt-3 pb-6 text-sm'>
                  {item.text}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  )
}
