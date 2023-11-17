import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import BellIcon from '../../../assets/icons/bell.svg'

interface ModalProps {
  mode: 'horizontal' | 'vertical'
  header: string
  text: string
  btnText: string
}

export default function Modal({ mode, header, text, btnText }: ModalProps) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function getModal() {
    if (mode == 'horizontal') {
      return (
        <div className='inline-block w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg'>
          <div className='grid grid-rows-1 grid-flow-col gap-x-3 body pb-4 px-6 pt-6'>
            <div
              className={`h-12 w-12 bg-primary-100 row-span-2  rounded-full flex items-center justify-center justify-self-center mx-auto`}
            >
              <img src={BellIcon} />
            </div>
            <div className='col-span-2'>
              <Dialog.Title
                as='h3'
                className='text-left text-lg font-bold leading-6 text-gray-900 '
              >
                {header}
              </Dialog.Title>
              <div className='mt-2'>
                <p className='text-sm font-normal text-neutral-500'>{text}</p>
              </div>
            </div>
          </div>
          <div className='footer py-3 px-4 bg-neutral-50 flex justify-end'>
            <button
              type='button'
              className='inline-flex justify-center mr-3 px-3 py-2 text-sm font-medium bg-transparent text-neutral-600 border border-neutral-300 rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type='button'
              className='inline-flex justify-center px-3 py-2 text-sm font-medium bg-primary-500 text-neutral-50 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
              onClick={closeModal}
            >
              Enable now
            </button>
          </div>
        </div>
      )
    }
    return (
      <div className='inline-block w-full max-w-sm my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg'>
        <div className='body p-4'>
          <div
            className={`h-12 w-12 bg-primary-100  rounded-full flex items-center justify-center justify-self-center mx-auto`}
          >
            <img src={BellIcon} />
          </div>
          <Dialog.Title
            as='h3'
            className='text-center text-lg font-bold leading-6 text-gray-900 pt-3 pb-2'
          >
            {header}
          </Dialog.Title>
          <div className='mt-2'>
            <p className='text-sm font-normal text-neutral-500'>{text}</p>
          </div>
        </div>
        <div className='footer p-4 bg-neutral-50'>
          <button
            type='button'
            className='inline-flex w-full justify-center px-4 py-2 text-sm font-medium bg-primary-500 text-neutral-50 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
            onClick={closeModal}
          >
            Got it, thanks!
          </button>
          <button
            type='button'
            className='inline-flex w-full justify-center mt-2 px-4 py-2 text-sm font-medium bg-transparent text-primary-300 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
            onClick={closeModal}
          >
            No thanks
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='inset-0 flex items-center justify-center'>
        <button
          type='button'
          onClick={openModal}
          className='px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
        >
          {btnText}
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='fixed inset-0 z-10 overflow-y-auto' onClose={closeModal}>
          <Dialog.Overlay className='fixed inset-0 bg-black opacity-40' />
          <div className='min-h-screen px-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0' />
            </Transition.Child>
            {/* This element is to trick the browser into centering the modal contents. */}
            <span className='inline-block h-screen align-middle' aria-hidden='true'>
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              {getModal()}
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
