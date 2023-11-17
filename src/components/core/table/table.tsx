import React from 'react'
import { useTable } from 'react-table'
import Avatar from '../avatar/avatar'
import Empty from '../../../assets/images/empty.svg'
import Badge from '../badge/badge'
import Progress from '../progress/progress'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Icons from '../icon-generator'
import { LottieComponent } from '../lottie/simple'
import CubeAnimation from '../lottie/Cubes.json'

interface TableProps {
  id: string
  columnsCustom: any
  data: any
  module?: any
  hideHeader?: boolean
  withBorder?: boolean
  className?: string
  scrollFunc?: any
  cellPadding?: string
  openModal?: any
  translations?: { empty: string; sent?: string; received?: string }
}

export default function Table({
  id,
  columnsCustom,
  data,
  module,
  hideHeader = false,
  withBorder = true,
  className,
  scrollFunc = () => {},
  openModal = {},
  cellPadding = 'px-4 py-3',
  translations
}: TableProps) {
  let columns = React.useMemo(() => columnsCustom, [])
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })

  function handleScroll(e: any) {
    scrollFunc(e.target, data.length)
  }

  function cellAccessor(cell: any) {
    switch (cell.column.id) {
      case 'status':
        return <Badge type='uncommon' text={cell.value} />
      case 'role':
        return <span className='font-semibold font-sm text-neutral-500'>{cell.render('Cell')}</span>
      case 'designation':
        return (
          <div className='w-full px-0 py-0 grid grid-rows-2 grid-flow-col dark:border-gray-600'>
            <div className='col-span-12 font-semibold text-neutral-900'>{cell.render('Cell')}</div>
            <div className='col-span-12 text-sm text-neutral-600 pt-1 font-normal'>
              {data[cell.row.index].companyName}
            </div>
          </div>
        )
      case 'name':
        return (
          <div className='w-full px-0 py-0 grid grid-rows-2 grid-flow-col dark:border-gray-600'>
            <div className={`row-span-2 order-first`}>
              <Avatar src={data[cell.row.index].src} size={12} />
            </div>
            <div className='col-span-11 font-semibold text-neutral-900'>{cell.render('Cell')}</div>
            <div className='col-span-11 text-sm text-neutral-600 pt-1 font-normal'>
              {data[cell.row.index].email}
            </div>
          </div>
        )
      case 'members':
        return (
          <div className='w-full px-0 py-0 grid grid-rows-2 grid-flow-col dark:border-gray-600'>
            <div className={`row-span-2 order-first`}>
              <Avatar imgs={data[cell.row.index].members} />
            </div>
          </div>
        )
      case 'progress':
        return <Progress type='linear' percent={data[cell.row.index].progress} />
      case 'progress':
        return <Progress type='linear' percent={data[cell.row.index].progress} />
      case 'cr_name':
        return (
          <>
            <div className='w-full px-0 py-0 grid grid-rows-2 grid-flow-col dark:border-gray-600'>
              <div className={`row-span-2 w-6 order-first mr-3 grid items-center`}>
                <img src={data[cell.row.index].src} className='w-6' alt='' />
              </div>
              <div className='col-span-11 font-bold text-xs leading-5'>
                {data[cell.row.index].name}
              </div>
              <div className='col-span-11 font-semibold text-neutral-500 text-xs tracking-lg' id={`token-${cell.row.index}-price`}>
                {data[cell.row.index].fiat_value != null && (
                  <>
                    {data[cell.row.index].fiat_abbreviation} {data[cell.row.index].price}{' '}
                  </>
                )}
                {data[cell.row.index].fiat_value == null && <> no price </>}
              </div>
              <div className='col-span-12 leading-5 text-right'>
                <span className='font-semibold text-xs tracking-lg pt-1' id={`token-${cell.row.index}-cr_value`}>
                  {data[cell.row.index].cr_value} {data[cell.row.index].cr_abbreviation}
                </span>
              </div>
              <div className='col-span-12 text-right text-neutral-500 text-xs'>
                <span className='fiatValue font-semibold tracking-lg pt-1' id={`token-${cell.row.index}-fiat_value`}>
                  {data[cell.row.index].fiat_value != null && (
                    <>
                      {data[cell.row.index].fiat_value} {data[cell.row.index].fiat_abbreviation}
                    </>
                  )}
                  {data[cell.row.index].fiat_value == null && <> no price </>}
                </span>
              </div>
            </div>
          </>
        )
      case 'collection_name':
        return (
          <>
            <div className='w-full px-0 py-0 flex flex-col dark:border-gray-600'>
              <div className='flex flex-row justify-between text-neutral-500 text-xs leading-5'>
                <div>{data[cell.row.index].name}</div>
                <div className='text-black font-semibold tracking-lg'>
                  {data[cell.row.index].fiat_value} {data[cell.row.index].fiat_abbreviation}
                </div>
              </div>
              <div className='flex flex-row space-x-2 font-semibold mt-1 text-neutral-500 text-xxs'>
                {data[cell.row.index].collection.slice(0, 3).map((item: any, i: number) => (
                  <div>
                    <img src={item.image} className='w-12 rounded-sm' alt='' />
                    <span className='text-xxs leading-4.5'>#{item.name}</span>
                  </div>
                ))}
                {data[cell.row.index].collection.length > 3 &&
                  module(data[cell.row.index].collection.length, cell.row.index)}
              </div>
            </div>
          </>
        )
      case 'cr_value':
        return (
          <>
            <span className='font-semibold text-xs tracking-lg pt-1'>
              {data[cell.row.index].cr_value} {data[cell.row.index].cr_abbreviation}
            </span>
          </>
        )
      case 'fiat_value':
        return (
          <>
            <span className='font-semibold text-xs tracking-lg pt-1'>
              {data[cell.row.index].fiat_value} {data[cell.row.index].fiat_abbreviation}
            </span>
          </>
        )
      case 'tr_status':
        return (
          <>
            <div className='w-full px-0 py-0 grid grid-rows-2 grid-flow-col gap-y-1 dark:border-gray-600'>
              <div className={`row-span-2 order-first place-self-center mr-4`}>
                <Icons
                  name='arrowAlt'
                  className={`w-8 ${
                    data[cell.row.index].tr_status.directionValue === 'Sent' && 'transform rotate-180'
                  }`}
                  strokeWidth={2}
                  color='#403F3F'
                />
              </div>
              <div className='col-span-11 '>
                <span className='leading-lg font-semibold font-xs capitalize'>
                  <span id={`tx-${cell.row.index}-status`}>{data[cell.row.index].tr_status.directionValue === 'Sent' ? translations?.sent : translations?.received}</span>
                </span>
              </div>
              <div className='place-self-stretch col-span-11 text-neutral-500 text-xs tracking-lg leading-5 uppercase'>
                <span id={`tx-${cell.row.index}-dateTime`}>
                  {data[cell.row.index].tr_status.dateFormatted} {data[cell.row.index].tr_status.timeFormatted}
                </span>
              </div> 
              <div className='col-span-12 leading-5 text-right font-semibold text-xs tracking-lg'>
                <span id={`tx-${cell.row.index}-cr_value`}>
                  {data[cell.row.index].tr_status.cr_value}{' '}
                  {data[cell.row.index].tr_status.cr_abbreviation}
                </span>
              </div>
              <div className='text-right col-span-12 text-neutral-500 text-xs font-semibold tracking-lg leading-5'>
                <span id={`tx-${cell.row.index}-hash_short`}>{data[cell.row.index].tr_status.hash_short}</span>
              </div>
            </div>
          </>
        )
      case 'tr_values':
        return <></>
      default:
        return <div className='font-semibold font-sm text-neutral-900'>{cell.render('Cell')}</div>
    }
  }

  let loadingState: JSX.Element = (
    <>
      {[...Array(4)].map(() => (
        <div className='w-full px-4 py-1.5 grid grid-rows-2 px-2 grid-flow-col dark:border-gray-600'>
          <div className={`row-span-2 w-6 order-first mr-3 grid items-center`}>
            <Skeleton className='w-6 h-6' circle={true} />
          </div>
          <div className='col-span-11 font-bold text-xs leading-5'>
            <Skeleton count={1} width={50} />
          </div>
          <div className='col-span-11 font-semibold text-success-500 text-xs tracking-lg'>
            <Skeleton count={1} width={50} />
          </div>
          <div className='col-span-11 text-right'>
            <span className='font-semibold text-xs tracking-lg pt-1'>
              <Skeleton count={1} width={75} />
            </span>
          </div>
          <div className='col-span-11 text-right'>
            <span className='fiatValue font-semibold text-xs tracking-lg pt-1'>
              <Skeleton count={1} width={75} />
            </span>
          </div>
        </div>
      ))}
    </>
  )

  let emptyState: JSX.Element = (
    <>
      {[...Array(1)].map(() => (
        <div className='w-full px-0 py-0 grid grid-rows-2 px-2 grid-flow-col dark:border-gray-600 space-y-2'>
          <LottieComponent classes='m-auto' loop={true} lottieData={CubeAnimation} maxWidth={150} />
          <span className='mx-auto text-neutral-500 text-sm'>{`${translations?.empty ?? 'Empty'}`}</span>
        </div>
      ))}
    </>
  )

  if (data[0] == 0 && data.length == 1) {
    return loadingState
  }

  if (data && data.length == 0) {
    return emptyState
  }

  return (
    <div
      onScroll={handleScroll}
      className={`w-full shadow-xs  ${
        withBorder ? 'border border-neutral-200' : ''
      } ${className}`}
    >
      <div className='w-full'>
        <table {...getTableProps()} id={id} className='w-full whitespace-no-wrap'>
          {!hideHeader && (
            <thead>
              {headerGroups.map((headerGroup: any) => (
                <tr
                  {...headerGroup.getHeaderGroupProps()}
                  className='text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800'
                >
                  {headerGroup.headers.map((column: any) => (
                    <th className='px-4 py-3' {...column.getHeaderProps()}>
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
          )}
          <tbody
            {...getTableBodyProps()}
            className='bg-white divide-y dark:divide-gray-700 dark:bg-gray-800'
          >
            {rows.map((row: any, i: any) => {
              prepareRow(row)
              return (
                <tr
                  {...row.getRowProps()}
                  onClick={(e) => openModal(i, e)}
                  className='text-gray-700 dark:text-gray-400'
                >
                  {row.cells.map((cell: any, index: number) => {
                    return (
                      <td id={index} className={cellPadding} {...cell.getCellProps()}>
                        {cellAccessor(cell)}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
