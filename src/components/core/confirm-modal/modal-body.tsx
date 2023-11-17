import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import Button, { ButtonProps } from '../button/button'
import Icons from '../icon-generator'
import Checkbox from '../checkbox'
interface ConfirmModalProps {
  open: boolean
  setOpen: any
  confirmEvent: any
  button?: JSX.Element
  header: string
  subheader: string | JSX.Element
  confirmBtnText: string
  declineBtnText?: string
  showIcon?: boolean
  checkboxConfirmation?: boolean
  confirmationText?: string
  confirmButtonType?: ButtonProps['type']
}

export default function ModalBody({
  open,
  setOpen,
  header,
  subheader,
  confirmBtnText,
  declineBtnText,
  confirmEvent,
  showIcon = false,
  checkboxConfirmation = false,
  confirmationText,
  confirmButtonType,
}: ConfirmModalProps) {
  const [isChecked, setChecked] = useState<boolean>(false)

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setChecked(false)
      }, 500)
    }
  }, [open])

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={() => setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-neutral-600 bg-opacity-80 transition-opacity' />
        </Transition.Child>
        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Dialog.Panel className='relative w-full max-w-md transform overflow-hidden rounded-xl bg-white p-4 pb-0 align-middle transition-all'>
                  <div className='flex flex-row space-x-4 text-left'>
                    {showIcon && (
                      <div>
                        <div className='h-9 w-9 rounded-full relative bg-error-50'>
                          <Icons
                            name='info'
                            color=' '
                            size='20px'
                            className={`absolute top-0 bottom-0 my-auto mx-auto right-0 left-0 text-error-500`}
                          />
                        </div>
                      </div>
                    )}
                    <div className='flex flex-col space-y-0.5 text-left'>
                      <h3 className='text-neutral-600 font-bold text-xl'>{header}</h3>
                      <p className='text-neutral-400 text-xs'>{subheader}</p>
                    </div>
                  </div>
                  {checkboxConfirmation && (
                    <div className='flex flex-row'>
                      <div className='my-auto'>
                        <Checkbox
                          isChecked={isChecked}
                          eventHandler={() => setChecked(!isChecked)}
                        />
                      </div>
                      <p className='text-neutral-800 text-sm'>{confirmationText}</p>
                    </div>
                  )}
                  <div className='flex flex-row -mx-4 space-x-4 p-4'>
                    {declineBtnText && (
                      <Button
                        id='confirm-modal-back'
                        onClick={() => confirmEvent(false)}
                        type='info outline'
                        text={declineBtnText}
                        isFullWidth={true}
                      />
                    )}
                    <Button
                      id='confirm-modal-continue'
                      onClick={() => confirmEvent(true)}
                      type={confirmButtonType}
                      text={confirmBtnText}
                      isDisabled={checkboxConfirmation ? !isChecked : false}
                      isFullWidth={true}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
