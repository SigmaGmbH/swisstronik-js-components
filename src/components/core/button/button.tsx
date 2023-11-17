import Icons from '../icon-generator'

export interface ButtonProps {
  id?: string
  icon?: string
  iconPosition?: 'left' | 'right' | 'with-text'
  iconMargin?: string
  iconStrokeWidth?: number
  iconClass?: string
  iconSize?: number
  type?:
    | 'secondary'
    | 'info'
    | 'secondary outline'
    | 'info outline'
    | 'info non outline'
    | 'purple'
    | 'error'
    | 'grey tab'
    | 'neutral'
    | 'reject'
    | 'reject outline'
    | 'neutral outline'
    | 'copy paste'
  borderRadius?: 'big' | 'small'
  text: string
  size?: 'small' | 'large' | 'regular' | 'x-small' | 'xx-small' | 'xs-no-p' | 'default-no-p'
  className?: string
  isFullWidth?: boolean
  isDisabled?: boolean
  onClick: () => void
}

export default function Button({
  id,
  icon,
  iconPosition = 'left',
  iconMargin = 'ml-1',
  iconStrokeWidth = 1.5,
  iconSize = 0,
  iconClass,
  borderRadius = 'big',
  className = '',
  type = 'info',
  text,
  size = 'regular',
  isDisabled = false,
  isFullWidth = false,
  onClick,
}: ButtonProps) {
  function getStylesByType(type: string): string {
    switch (type) {
      case 'secondary':
        return 'font-semibold bg-secondary-100 hover:bg-secondary-300 active:bg-secondary-500 text-neutral-600 hover:text-neutral-50 active:text-neutral-50'
      case 'reject':
        return 'font-semibold bg-error-500 hover:bg-error-600 active:bg-error-700 text-neutral-50'
      case 'info':
        return 'font-semibold bg-neutral-700 hover:bg-neutral-800 active:bg-neutral-900 text-neutral-50 disabled:text-neutral-500 disabled:bg-neutral-50'
      case 'secondary outline':
        return 'font-semibold bg-transparent border border-secondary-500 text-secondary-500 hover:border-secondary-200 hover:text-secondary-200 active:border-secondary-600 active:text-secondary-600'
      case 'info outline':
        return 'font-semibold bg-neutral-50 border border-neutral-700 text-neutral-700 hover:border-neutral-800 hover:text-neutral-800 active:border-neutral-900 active:bg-neutral-100 active:text-neutral-900 disabled:border-neutral-100 disabled:bg-neutral-50 disabled:text-neutral-200'
      case 'info non outline':
        return 'font-semibold bg-transparent border border-transparent text-neutral-700 hover:text-neutral-800 active:text-neutral-900 disabled:text-neutral-400'
      case 'reject outline':
        return 'font-semibold bg-transparent border border-transparent hover:border active:border text-error-500 hover:border-error-500 hover:text-error-400 active:border-error-400 active:bg-error-50  active:text-error-400 disabled:border-neutral-400'
      case 'purple':
        return 'font-bold bg-primary-50 hover:bg-primary-100 active:bg-primary-200 disabled:bg-neutral-50 text-primary-500 hover:text-primary-500 active:text-primary-600 disabled:text-neutral-400'
      case 'error':
        return 'font-bold bg-error-50 hover:bg-error-100 active:bg-error-100 disabled:bg-neutral-50 text-error-500 hover:text-error-500 active:text-error-600 disabled:text-neutral-300'
      case 'grey tab':
        return 'font-bold bg-neutral-50 hover:bg-neutral-100 active:bg-neutral-100 disabled:bg-transparent text-neutral-500 hover:text-neutral-600 active:text-neutral-700 disabled:text-neutral-50'
      case 'neutral':
        return 'font-bold bg-transparent hover:bg-neutral-50 active:bg-neutral-100 disabled:bg-transparent text-neutral-700 disabled:text-neutral-50'
      case 'neutral outline':
        return 'font-semibold bg-transparent border border-neutral-400 text-neutral-400 hover:border-neutral-500 hover:text-neutral-500 active:border-neutral-500 active:bg-neutral-50  active:text-neutral-500 disabled:border-neutral-400 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:border-neutral-400'
      case 'copy paste':
        return 'font-semibold bg-transparent border border-neutral-100 text-neutral-700 hover:border-neutral-500 active:border-neutral-900 disabled:border-neutral-100 disabled:text-neutral-100'
      default:
        return 'font-semibold bg-primary-500 hover:bg-primary-300 active:bg-primary-700 text-neutral-50' //info
    }
  }

  function getColorByType(type: string): string {
    switch (type) {
      case 'secondary':
        return 'text-neutral-50 disabled:text-neutral-400'
      case 'info':
        return 'text-neutral-300 disabled:text-neutral-400'
      case 'secondary outline':
        return 'text-secondary-500 hover:text-secondary-200 active:text-secondary-600 disabled:text-neutral-400'
      case 'info outline':
        return 'text-primary-500 hover:text-primary-300 active:text-primary-300 disabled:text-neutral-400'
      case 'purple':
        return 'text-primary-500 hover:text-primary-500 active:text-primary-600 disabled:text-neutral-400'
      case 'error':
        return 'text-error-500 hover:text-error-500 active:text-error-600 disabled:text-neutral-300'
      case 'copy paste':
        return 'text-neutral-700 disabled:text-neutral-100'
      default:
        return 'text-neutral-50 disabled:text-neutral-400' //info
    }
  }

  function getSize(size: string): string {
    switch (size) {
      case 'xx-small':
        return 'text-xs py-2 px-1.5'
      case 'x-small':
        return 'text-xs py-1.75 px-2'
      case 'small':
        return 'text-xs py-2 px-3'
      case 'regular':
        return 'text-sm py-3 px-5'
      case 'default-no-p':
        return 'text-sm h-11'
      case 'large':
        return 'text-base py-4 px-6'
      case 'xs-no-p':
        return 'text-xs h-9'
      default:
        return '' //regular
    }
  }

  function getIconSize(size: string): number {
    if (iconSize > 0) {
      return iconSize
    }
    switch (size) {
      case 'xx-small':
        return 13
      case 'small':
        return 14
      case 'regular':
        return 16
      case 'large':
        return 18
      default:
        return 16 //regular
    }
  }

  return (
    <button
      id={id}
      onClick={onClick}
      className={`${isFullWidth ? 'w-full' : ''} ${getSize(size)} ${className} ${getStylesByType(
        type,
      )} text-center disabled:text-neutral-300 disabled:bg-neutral-50 ${
        borderRadius == 'big' ? 'rounded-lg' : 'rounded'
      }`}
      disabled={isDisabled}
    >
      <div className='flex place-content-center'>
        {icon && iconPosition != 'with-text' && (
          <Icons
            name={icon}
            color={getColorByType(type)}
            strokeWidth={iconStrokeWidth}
            size={getIconSize(size)}
            className={`inline my-auto ${iconClass} ${
              iconPosition == 'left'
                ? 'mr-2 order-first'
                : size == 'xx-small'
                ? 'ml-1 order-last'
                : 'ml-2 order-last'
            } `}
          />
        )}
        <span className={`${isFullWidth ? 'w-full' : ''} align-middle`}>
          {text}
          {icon && iconPosition == 'with-text' && (
            <Icons
              name={icon}
              strokeWidth={iconStrokeWidth}
              color={` `}
              size={getIconSize(size)}
              className={`inline my-auto ${iconMargin} ${iconClass}`}
            />
          )}
        </span>
      </div>
    </button>
  )
}
