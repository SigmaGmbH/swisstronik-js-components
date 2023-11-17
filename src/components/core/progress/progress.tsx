import { usePopperTooltip } from 'react-popper-tooltip'
import 'react-popper-tooltip/dist/styles.css'

interface ProgressProps {
  percent: number
  type: 'circular' | 'linear'
}

export default function Progress({ percent, type }: ProgressProps) {
  const { getArrowProps, getTooltipProps, setTooltipRef, setTriggerRef, visible } =
    usePopperTooltip({
      placement: 'bottom-end',
    })

  const progressStyle = {
    width: `${percent}%`,
  }

  const sqSize = 64
  const strokeWidth = 7
  const radius = (sqSize - strokeWidth) / 2
  const viewBox = `0 0 ${sqSize} ${sqSize}`
  const dashArray = radius * Math.PI * 2
  const dashOffset = dashArray - (dashArray * percent) / 100

  return (
    <>
      {type == 'linear' && (
        <>
          <div className='w-full bg-neutral-100 rounded-full '>
            <div
              ref={setTriggerRef}
              className='bg-primary-500 text-xs font-medium text-primary-100 transition-all duration-500 text-center p-1.25 leading-none rounded-full'
              style={progressStyle}
            ></div>
          </div>
        </>
      )}

      {type == 'circular' && (
        <div className='w-16' ref={setTriggerRef}>
          <svg width={sqSize} height={sqSize} viewBox={viewBox}>
            <circle
              className='stroke-current text-neutral-100'
              fill='none'
              cx={sqSize / 2}
              cy={sqSize / 2}
              r={radius}
              strokeWidth={`${strokeWidth}px`}
            />
            <circle
              className='stroke-current text-primary-500'
              fill='none'
              cx={sqSize / 2}
              cy={sqSize / 2}
              r={radius}
              strokeWidth={`${strokeWidth}px`}
              transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
              style={{
                strokeDasharray: dashArray,
                strokeDashoffset: dashOffset,
              }}
            />
          </svg>
        </div>
      )}

      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({ className: 'tooltip-container text-sm px-2.5 bg-neutral-50 border-0' })}
        >
          <div {...getArrowProps({ className: 'tooltip-arrow bg-neutral-50 border-0' })} />
          {percent}%
        </div>
      )}
    </>
  )
}
