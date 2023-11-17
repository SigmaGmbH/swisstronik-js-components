import Icons from '../icon-generator'

interface AlertProps {
  header: string
  type: 'warning' | 'success' | 'error' | 'info'
  rounded?: string
  text?: string
  withText?: boolean
  withControls?: boolean
}

export default function Alert({
  header,
  type,
  text,
  rounded = 'rounded',
  withText = false,
  withControls = false,
}: AlertProps) {
  function getColorByType(type: string): string {
    switch (type) {
      case 'warning':
        return 'bg-warning-50'
      case 'success':
        return 'bg-success-50'
      case 'error':
        return 'bg-error-50'
      case 'info':
        return 'bg-primary-50'
      default:
        return 'bg-primary-50'
    }
  }

  function getTextColorByType(type: string): string {
    switch (type) {
      case 'warning':
        return 'text-warning-500'
      case 'success':
        return 'text-success-500'
      case 'error':
        return 'text-error-600'
      case 'info':
        return 'text-primary-500'
      default:
        return 'text-primary-500'
    }
  }

  function getControlsColorByType(type: string): string {
    switch (type) {
      case 'warning':
        return 'text-warning-600'
      case 'success':
        return 'text-success-600'
      case 'error':
        return 'text-error-600'
      case 'info':
        return 'text-primary-600'
      default:
        return 'text-primary-600'
    }
  }

  return (
    <div className={`w-auto relative ${getColorByType(type)} p-4 ${rounded} align-top`}>
      <Icons
        name='info'
        color=' '
        size='20px'
        className={`absolute top-0 bottom-0 my-auto left-6 ${getControlsColorByType(type)}`}
      />
      <h6
        className={`overflow-hidden truncate whitespace-normal text-tiny text-left font-semibold leading-5 ${getTextColorByType(
          type,
        )} ml-12`}
      >
        {header}
      </h6>
      {withText && (
        <p
          className={`text-tiny overflow-hidden truncate whitespace-normal leading-5 ${getTextColorByType(
            type,
          )} ml-12`}
        >
          {text}
        </p>
      )}
      {withControls && (
        <span className='block mt-5'>
          <a
            href=''
            className={`text-tiny font-semibold leading-5 ${getControlsColorByType(type)} ml-12`}
          >
            View more
          </a>
          <a
            href=''
            className={`text-tiny font-semibold leading-5 ${getControlsColorByType(type)} ml-4`}
          >
            Dismiss
          </a>
        </span>
      )}
    </div>
  )
}
