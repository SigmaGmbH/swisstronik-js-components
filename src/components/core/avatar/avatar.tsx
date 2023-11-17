interface AvatarProps {
  alt?: string
  size?: 6 | 8 | 12
  src?: string
  imgs?: any[]
  initials?: string
}

export default function Avatar({
  src,
  alt = 'alt sample text',
  size = 8,
  imgs,
  initials,
}: AvatarProps) {
  const sizes = {
    6: 'h-6 w-6 font-normal text-xs',
    8: 'h-8 w-8 font-normal text-base ',
    12: 'h-12 w-12 font-semibold text-2xl',
  }

  type ObjectKey = keyof typeof sizes
  const sizeProp = size as ObjectKey

  return (
    <>
      {imgs && (
        <div className={`flex ${size > 6 ? '-space-x-2' : '-space-x-1'} overflow-hidden`}>
          {imgs.map((img, index) => (
            <Avatar key={index.toString()} src={img.src} alt={img.alt} size={size} />
          ))}
        </div>
      )}
      {src && (
        <img
          className={`inline-block h-${size} w-${size} rounded-full ring-2 ring-white`}
          src={src}
          alt={alt}
        />
      )}
      {!src && !imgs && initials && (
        <div
          className={` ${sizes[sizeProp]} bg-primary-500 text-neutral-50  rounded-full flex items-center justify-center`}
        >
          {initials.slice(0,2)}
        </div>
      )}
    </>
  )
}
