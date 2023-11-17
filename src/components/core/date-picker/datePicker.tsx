import { useState } from 'react'
import { addDays } from 'date-fns'
import { DateRangePicker } from 'react-date-range'

import './theme.scss'

export default function DatePicker() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ])

  return (
    <DateRangePicker
      onChange={(item: any) => setState([item.selection])}
      showSelectionPreview={true}
      moveRangeOnFirstSelection={false}
      months={2}
      ranges={state}
      direction='vertical'
      scroll={{ enabled: true }}
    />
  )
}
