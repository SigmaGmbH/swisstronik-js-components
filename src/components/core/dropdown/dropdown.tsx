import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import Icons from '../icon-generator'

interface DropdownProps {
  text: any
  btn?: any
  data: any[]
  itemsBlockStyle?: string
  itemIcon?: string
  iconClass?: string
  isDisabled?: boolean
  outlined?: boolean
  isFullWidth?: boolean
  showIconIfSelected?: boolean
  selectEvent?: any
}

export default function Dropdown({
  text,
  data,
  selectEvent,
  isDisabled = false,
  outlined = false,
  isFullWidth = false,
  showIconIfSelected = false,
  itemIcon,
  btn,
  iconClass = '',
  itemsBlockStyle = 'mt-2 rounded-md shadow-custom-2 border border-neutral-300',
}: DropdownProps) {
  function getColor() {
    if (isDisabled) {
      return 'neutral-300'
    } else {
      return 'neutral-500'
    }
  }

  return (
    <div className={`flex ${isFullWidth ? 'w-full' : ''}`}>
      <Menu as='div' className='relative w-full inline-block text-left'>
        {({ open }) => (
          <>
            {!btn && (
              <>
                {outlined && (
                  <Menu.Button
                    disabled={isDisabled}
                    className={`flex justify-between w-full px-5 py-3 text-sm font-semibold tracking-sm text-neutral-900 ${
                      open ? 'bg-neutral-50' : 'bg-white'
                    }  
                                    border border-neutral-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 disabled:text-neutral-300`}
                  >
                    <span>{text}</span>
                    <Icons
                      name='chevron'
                      color={getColor()}
                      size='20px'
                      className={` ml-2 mt-2 -mr-1 ${
                        open ? 'transform rotate-180' : ''
                      } top-4 left-6`}
                    />
                  </Menu.Button>
                )}
                {!outlined && (
                  <Menu.Button
                    disabled={isDisabled}
                    className={`flex justify-between text-sm text-neutral-400 focus:outline-none focus-visible:ring-0 disabled:text-neutral-300`}
                  >
                    <span>{text}</span>
                    <Icons
                      name='chevron'
                      color={getColor()}
                      size='20px'
                      className={` ml-2 mt-2 mr-0 ${
                        open ? 'transform rotate-180' : ''
                      } top-4 left-6`}
                    />
                  </Menu.Button>
                )}
              </>
            )}
            {btn && (
              <Menu.Button disabled={isDisabled} className={``}>
                {btn}
              </Menu.Button>
            )}
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items
                className={`absolute z-10 overflow-hidden right-0 ${
                  isFullWidth ? 'w-full' : ''
                } origin-top-right bg-white outline-none ring-0 focus-visible:ring-0 ${itemsBlockStyle}`}
              >
                {data.map((item, index) => (
                  <>
                    <Menu.Item key={index}>
                      {({ active }) => (
                        <button
                          onClick={() => (item.action ? item.action(index) : selectEvent(index))}
                          className={`${
                            active ? 'hover:bg-neutral-50' : ''
                          } font-normal group flex flex-row justify-between items-center w-full p-3 text-sm whitespace-nowrap ${
                            item.className
                          }`}
                        >
                          {item.name && <>{item.name}</>}
                          {itemIcon && (
                            <>
                              {showIconIfSelected && item.name == text && (
                                <Icons name={itemIcon} color='neutral-500' className={iconClass} />
                              )}
                              {!showIconIfSelected && (
                                <Icons name={itemIcon} color='' className={iconClass} />
                              )}
                            </>
                          )}
                        </button>
                      )}
                    </Menu.Item>
                  </>
                ))}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  )
}
