export default function AddressBadge({ address }: { address: string }) {
  return (
    <span className='font-semibold py-1 px-2 text-sm leading-5 tracking-sm bg-neutral-50 text-neutral-700 rounded-lg'>
      {address}
    </span>
  )
}
