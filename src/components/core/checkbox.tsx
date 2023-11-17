export default function Checkbox({isChecked, eventHandler}: {isChecked: boolean, eventHandler: any}) {
  return (
    <input
      id='checkbox-1'
      type='checkbox'
      className='bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded'
      onClick={eventHandler}
      checked={isChecked}
    />
  )
}
