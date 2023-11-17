import Icons from '../icon-generator'

interface InputProps {
  name: string
  state?: 'default' | 'error'
  reference?: any
  type?: string
  tip?: string
  showTip?: boolean
  placeholder: string
  label?: string
  customLabelClasses?: string
  showLabel?: boolean
  value: any
  handle: any
  pasteEvent?: any
  size?: 'small' | 'small-wide' | 'large' | 'regular'
  errorMessage?: string
  isDisabledStyled?: boolean
  isMnemonicInput?: boolean
  isDisabled?: boolean
  clickEvent?: any
  className?: string
  icon?: string
  clickIconEvent?: any
  iconColor?: string
  iconSize?: number
  iconStroke?: number
  rounding?: 'regular' | 'lg' | 'none'
  forgotPasswordButton?: any
  tabIndex?: number
}

export default function Input({
  size = 'regular',
  state = 'default',
  reference,
  name,
  type = 'text',
  value,
  tip,
  placeholder,
  className = '',
  showTip = false,
  label,
  showLabel = false,
  customLabelClasses,
  isDisabledStyled = false,
  isMnemonicInput = false,
  clickEvent = () => {},
  clickIconEvent = () => {},
  rounding = 'regular',
  icon,
  iconColor = 'neutral-400',
  iconSize = 18,
  iconStroke = 1.5,
  errorMessage,
  isDisabled = false,
  handle,
  pasteEvent = () => {},
  forgotPasswordButton,
  tabIndex = 0,
}: InputProps) {
  function handleChange(event: any) {
    handle(event.target.name, event.target.value)
  }

  function handleClick(event: any) {
    clickEvent(event.target.name)
  }

  function clickIcon() {
    clickIconEvent(name)
  }

  function handlePaste(event: any) {
    pasteEvent(event)
  }

  function getSize(size: string): string {
    switch (size) {
      case 'small-wide':
        return 'text-sm py-2.5 px-2'
      case 'small':
        return 'text-sm py-2 px-4'
      case 'regular':
        return 'text-sm py-3 px-4'
      case 'large':
        return 'text-base py-3.5 px-4'
      default:
        return 'text-sm py-3 px-4' //regular
    }
  }

  function getBorderStyles(stateProp: string): string {
    if (isDisabled) stateProp = 'default'
    if (isDisabledStyled) return 'border border-transparent'
    if (isMnemonicInput) return 'border border-neutral-500'
    switch (stateProp) {
      case 'default':
        return 'border border-neutral-100'
      case 'error':
        return 'border border-error-600'
      default:
        return 'border border-neutral-100' //regular
    }
  }

  function getRounded(roundingDegree: string): string {
    switch (roundingDegree) {
      case 'lg':
        return 'rounded-lg'
      case 'none':
        return 'rounded-none'
      default:
        return 'rounded' //regular
    }
  }

  const disabledStyles =
    'bg-neutral-50 text-neutral-500 font-bold focus:outline-none focus:border-neutral-500 focus:shadow-none'
  const smallWideStyles =
    'border border-neutral-100 font-bold focus:outline-none focus:border-neutral-700 focus:shadow-none'
  const baseWideStyles = 'bg-white text-neutral-500 focus:outline-none focus:border-neutral-700'

  return (
    <>
      {showLabel && (
        <label
          className={`inline-flex mb-1 ${
            customLabelClasses
              ? customLabelClasses
              : `text-xs font-normal ${state === 'error' ? 'text-error-600' : 'text-neutral-600'}`
          }`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div className='relative flex-1'>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          ref={reference}
          id={name}
          className={` 
                    ${
                      isDisabled || isDisabledStyled
                        ? disabledStyles
                        : `${size === 'small-wide' ? smallWideStyles : baseWideStyles}`
                    }
                    ${getSize(size)} ${getRounded(rounding)}  ${getBorderStyles(state)} flex-1 
                    w-full 
                    ${state === 'error' ? 'text-error-600' : 'text-neutral-900'}
                    ${state !== 'error' ? 'placeholder-neutral-200' : 'placeholder-error-600'}
                    ${className}
                `}
          onChange={handleChange}
          onFocus={(e) => {
            if (isMnemonicInput) {
              handleClick(e)
              e.target.setSelectionRange(e.target.value.length, e.target.value.length)
            }
          }}
          value={value}
          min={0}
          disabled={isDisabled}
          onClick={handleClick}
          onPaste={handlePaste}
          tabIndex={tabIndex}
        />
        {icon && (
          <button
            name={name}
            onClick={clickIcon}
            className={`absolute inset-y-0 right-3 flex items-center ${
              state === 'error' ? 'text-error-600' : 'text-neutral-500 focus:text-neutral-700'
            }`}
            tabIndex={tabIndex + 1}
          >
            <Icons
              name={icon}
              color={iconColor}
              strokeWidth={iconStroke}
              size={iconSize}
              className={``}
            />
          </button>
        )}
      </div>
      {showTip && tip === '' && state != 'error' && !isMnemonicInput && (
        <span className='flex-inline mt-1 text-xs font-normal text-neutral-500'>&nbsp;</span>
      )}
      {showTip && (state !== 'error' || isDisabled) && (
        <span className='flex-inline mt-1 text-xs font-normal text-neutral-300'>{tip}</span>
      )}
      {state === 'error' && !isDisabled && !forgotPasswordButton && (
        <span className='flex-inline mt-1 text-xs font-normal text-error-600'>{errorMessage}</span>
      )}
      {forgotPasswordButton && (
        <div className='flex flex-row space-x-1'>
          {state === 'error' && !isDisabled && (
            <span className='flex-inline mt-1 text-xs font-normal text-error-600'>
              {errorMessage}
            </span>
          )}
          <span className='flex-inline mt-1 text-xs font-normal'>{forgotPasswordButton}</span>
        </div>
      )}
    </>
  )
}
