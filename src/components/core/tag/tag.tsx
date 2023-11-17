import Icons from '../icon-generator'

interface TagProps {
  icon: string
  iconPosition?: 'left' | 'right'
  type?: 'secondary' | 'info' | 'secondary outline' | 'info outline'
  text: string
  size?: 'large' | 'regular'
  isDisabled?: boolean
}

export default function Tag({
  icon,
  iconPosition = 'left',
  text,
  size = 'regular',
  isDisabled = false,
}: TagProps) {
  function getSize(size: string): string {
    switch (size) {
      case 'small':
        return 'text-xs py-2 px-3'
      case 'regular':
        return 'text-sm py-1 px-3'
      case 'large':
        return 'text-base py-1.75 px-3.5'
      default:
        return 'text-sm py-3 px-5' //regular
    }
  }

  function getIconSize(size: string): number {
    switch (size) {
      case 'regular':
        return 16
      case 'large':
        return 18
      default:
        return 16 //regular
    }
  }

  return (
    <span
      className={`inline-flex ${getSize(size)} ${
        isDisabled
          ? 'text-neutral-400 bg-neutral-100'
          : 'bg-neutral-100 text-neutral-900 hover:text-neutral-50 hover:bg-primary-500'
      }    font-normal  rounded-50px `}
    >
      <div className='flex'>
        {icon && (
          <Icons
            name={icon}
            color={``}
            size={`${getIconSize(size)}px`}
            className={`inline  my-auto ${
              iconPosition == 'left' ? 'mr-2 order-first' : 'ml-2 order-last'
            } `}
          />
        )}
        <span className='align-middle'>{text}</span>
      </div>
    </span>
  )
}
