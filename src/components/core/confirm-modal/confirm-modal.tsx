import React, { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Button, { ButtonProps } from '../button/button'
import { Interface } from 'readline'
import ModalBody from './modal-body'

interface ConfirmModalProps {
  confirmEvent: any
  button?: JSX.Element
  header: string
  subheader: string
  confirmBtnText: string
  declineBtnText: string
  showIcon?: boolean
  open?: boolean
  setOpenEvent?:any
  checkboxConfirmation?: boolean
  confirmationText?: string
  confirmButtonType?: ButtonProps["type"]
}

export default function ConfirmModal({
  confirmEvent,
  button,
  header,
  open = false,
  setOpenEvent,
  subheader,
  confirmBtnText,
  declineBtnText,
  showIcon = false,
  checkboxConfirmation = false,
  confirmationText,
  confirmButtonType,
}: ConfirmModalProps) {
  const [openState, setOpen] = useState(open)

  useEffect(() => {
    console.log(`useEffect`, open)
    setOpen(open)
  }, [open])

  function confirm(isConfirmed: boolean) {
    confirmEvent(isConfirmed)
    setOpen(false)
    if(setOpenEvent){
      setOpenEvent(false)
    }
  }
  return (
    <>
      {button && React.cloneElement(button, { onClick: () => setOpen(true) })}
      <ModalBody
        showIcon={showIcon}
        open={openState}
        setOpen={setOpenEvent ? setOpenEvent : setOpen}
        confirmEvent={confirm}
        header={header}
        subheader={subheader}
        confirmBtnText={confirmBtnText}
        declineBtnText={declineBtnText}
        checkboxConfirmation={checkboxConfirmation}
        confirmationText={confirmationText}
        confirmButtonType={confirmButtonType}
      />
    </>
  )
}
