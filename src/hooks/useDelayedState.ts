import { useEffect, useState, useRef } from 'react'

export default function useDelayedState<T>(initialState: T) {
  const [state, setState] = useState(initialState)
  const timeoutRef = useRef<number>()

  const setStateAfter = (newState: T, delay: number) => {
    if (delay === 0 || delay === undefined) {
      setState(newState)
    } else {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = window.setTimeout(() => {
        setState(newState)
        timeoutRef.current = undefined
      }, delay)
    }
  }

  const cancelSetState = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = undefined
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return [state, setStateAfter, cancelSetState]
}
