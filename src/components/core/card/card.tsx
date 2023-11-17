import Badge from '../badge/badge'

interface CardProps {
  img: any
  type: 'default' | 'uncommon' | 'rare' | 'ultra-rare'
  text: string
  price: number
}

export default function Card({ type, text, img, price }: CardProps) {
  function getStylesByType(type: string): string {
    let color = ''
    switch (type) {
      case 'default':
        color = 'bg-neutral-300 text-neutral-700'
        break
      case 'uncommon':
        color = 'bg-success-300 text-success-700'
        break
      case 'rare':
        color = 'bg-warning-300 text-warning-700'
        break
      case 'ultra-rare':
        color = 'bg-error-300 text-error-700'
        break
      default:
        color = 'bg-neutral-300 text-neutral-700'
    }

    return color
  }

  return (
    <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
      <div className='group relative group-rounded-2.5xl'>
        <div className='w-full relative z-3 h-85 bg-gray-200 aspect-w-1 aspect-h-1 rounded-2.5xl overflow-hidden lg:h-80 lg:aspect-none'>
          <img
            src={img}
            alt=''
            className='w-full h-full object-center object-cover lg:w-full lg:h-full'
          />
        </div>
        <div className='flex flex-wrap'>
          <div className='w-full px-4 -mt-5 pt-8 h-16 z-2 rounded-b-2.5xl bg-neutral-dark-50'>
            <p className='text-sm font-semibold text-neutral-50'>{text}</p>
          </div>
          <div className='z-1 h-15 px-4 pt-7 pb-3 -mt-6 w-full bg-neutral-dark-800 rounded-b-2.5xl justify-between text-right'>
            <div className='flex justify-between'>
              <div className='space-x-1.5'>
                <Badge text={type.toUpperCase()} type={type} />
                <Badge text='RARE' type='default' />
              </div>
              <span className='text-sm font-bold pt-1 align-middle text-neutral-700'>${price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
