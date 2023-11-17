import SliderRC from 'rc-slider'
import { useState } from 'react'

export default function Slider({ type }: { type: 'range' | 'default' }) {
  let [rangeValue, setRange] = useState([40, 80])
  let [sliderValue, setSlider] = useState(40)

  function changeRange(value: any) {
    setRange(value)
  }

  function changeSlider(value: any) {
    setSlider(value)
  }

  function getSlider() {
    if (type == 'range') {
      return <SliderRC range allowCross={false} defaultValue={rangeValue} onChange={changeRange} />
    } else {
      return <SliderRC defaultValue={sliderValue} onChange={changeSlider} />
    }
  }

  return <>{getSlider()}</>
}
