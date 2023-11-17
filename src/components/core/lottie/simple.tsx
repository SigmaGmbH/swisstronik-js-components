import { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

interface IProps {
  lottieData: any
  onHover?: boolean
  loop?: boolean
  classes?: string
  maxWidth?: number
  playOnce?: boolean,
  delay?: number
}

export const LottieComponent = ({ lottieData, onHover, loop, classes, maxWidth, playOnce, delay }: IProps) => {
  const lottieContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (lottieContainer.current) {
      const animation = lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: 'svg',
        loop: loop || (!playOnce && !onHover),
        autoplay: !delay && !onHover,
        animationData: lottieData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      })

      if (delay) {
        setTimeout(()=> {
            animation.play()
        }, delay)
      }
  
      //NOTE: Set animation on hover
      if (onHover) {
        let directionMenu = 1
        lottieContainer.current.addEventListener('mouseenter', () => {
          animation.setDirection(directionMenu)
          animation.play()
        })

        lottieContainer.current.addEventListener('mouseleave', () => {
          animation.setDirection(-directionMenu)
          animation.play()
        })
      }

      return () => {
        animation.destroy()
      }
    }
  }, [lottieContainer, lottieData])

  return (
    <div
      style={{ height: 'auto', width: 'auto', maxWidth: maxWidth ? maxWidth : 'auto' }}
      className={'relative tracking-tight ' + classes}
      ref={lottieContainer}
    ></div>
  )
}