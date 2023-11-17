import LogoImage from '../../assets/images/logo.svg'
import LogoFullImage from '../../assets/images/logo-full.svg'
import { Link } from 'react-router-dom'

export default function Logo({
  isFull = false,
  to = '#',
  onClick = () => {},
}: {
  isFull?: boolean
  to?: string
  onClick?: any
}) {
  return (
    <Link to={to} onClick={onClick}>
      <span className='sr-only'>Workflow</span>
      <img className='h-8' src={isFull ? LogoFullImage : LogoImage} alt='logo' />
    </Link>
  )
}
