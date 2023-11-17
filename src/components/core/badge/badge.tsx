interface BadgeProps {
  type: 'default' | 'uncommon' | 'rare' | 'ultra-rare'
  text: string
}

export default function Badge({ type, text }: BadgeProps) {
  function getStylesByType(type: string): string {
    let color = ''
    switch (type) {
      case 'default':
        color = 'bg-neutral-300 text-neutral-700'
        break
      case 'uncommon':
        color = 'bg-success-50 text-success-600'
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
    <span
      className={`px-2 py-1.5 text-xxs leading-5 tracking-lg rounded-xsm font-semibold ${getStylesByType(
        type,
      )}`}
    >
      {text.toUpperCase()}
    </span>
  )
}
