import { useState } from 'react'

export default function RadioBtn({ text = '', checked }: { text?: string; checked: boolean }) {
  return (
    <label className='flex flex-row radio cursor-pointer h-4.5'>
      <label className='container-radio'>
        <input type='radio' checked={checked} />
        <span className='checkmark'></span>
      </label>
      <div className='self-center title pl-6 text-sm'>{text}</div>
    </label>
  )
}
