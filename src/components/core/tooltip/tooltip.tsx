import { Description } from '@storybook/components'
import * as React from 'react'
import { usePopperTooltip } from 'react-popper-tooltip'
import 'react-popper-tooltip/dist/styles.css'
import Button from '../button/button'
import Icons from '../icon-generator'

interface TooltipProps {
  position?:
    | 'auto'
    | 'auto-start'
    | 'auto-end'
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'right-start'
    | 'right-end'
    | 'left-start'
    | 'left-end'
  header: string
  hoverElement?: any
  description: string
  primaryBtnText?: string
  secondaryBtnText?: string
  colorReverted?: boolean
  icon?: any
  iconPosition?: 'left' | 'right'
}

export default function Tooltip({
  hoverElement,
  position = 'auto',
  colorReverted = false,
  header,
  description,
  primaryBtnText,
  secondaryBtnText,
  icon,
  iconPosition,
}: TooltipProps) {
  const { getArrowProps, getTooltipProps, setTooltipRef, setTriggerRef, visible } =
    usePopperTooltip({
      placement: position,
      offset: [0, 20],
    })

  const element = React.cloneElement(hoverElement, { ref: setTriggerRef })

  return (
    <>
      {element}
      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({
            className: `tooltip-container text-sm py-4 px-6 bg-transparent ${
              colorReverted ? 'border-0 reverted' : ' border-neutral-50'
            } rounded-xsm shadow-none`,
          })}
        >
          <div {...getArrowProps({ className: 'tooltip-arrow z-10' })} />

          <div
            className={`background fixed top-0 left-0  ${
              colorReverted ? 'blured' : 'bg-neutral-50'
            } h-full w-full  rounded-xsm `}
          ></div>

          <div className='content z-10'>
            <div className='flex'>
              {icon && (
                <Icons
                  name={icon}
                  color={''}
                  size={`20px`}
                  className={`inline  my-auto ${
                    iconPosition == 'left' ? 'mr-2 order-first' : 'ml-2 order-last'
                  } `}
                />
              )}
              <h5
                className={`${
                  colorReverted ? 'text-neutral-50' : 'text-neutral-900'
                } text-base font-semibold`}
              >
                {header}
              </h5>
            </div>
            <p
              className={`text-xs text-left ${
                colorReverted ? 'text-neutral-50' : 'text-neutral-600'
              }  mt-2.5`}
            >
              {description}
            </p>
            <div className='flex justify-end space-x-2.5 mt-5'>
              {primaryBtnText && (
                <Button
                  onClick={() => console.log('button clicked!')}
                  text={primaryBtnText}
                  size='small'
                />
              )}
              {secondaryBtnText && (
                <Button
                  onClick={() => console.log('button clicked!')}
                  text={secondaryBtnText}
                  size='small'
                  type='info outline'
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
