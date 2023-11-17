import { Tab } from '@headlessui/react'
import TabItem from './tabItem'

interface TabsProps {
  data: any
  panelClassName?: string
  listClassName?: string
  tabNamesHidden?: boolean
  tabsClassName?: string
  changeTabEvent?: any
}

export default function Tabs({
  data,
  panelClassName,
  listClassName,
  tabNamesHidden = false,
  tabsClassName,
  changeTabEvent,
}: TabsProps) {
  return (
    <>
      <Tab.Group
        onChange={(index) => {
          if(changeTabEvent){
            changeTabEvent()
          }
        }}
      >
        <Tab.List hidden={tabNamesHidden} className={`space-x-6 ${listClassName}`}>
          {data.map((item: any, index: any) => (
            <TabItem
              id={`${item.tabName.toLowerCase()}-tab`}
              key={index}
              elements={item.tabName}
              className={tabsClassName}
            />
          ))}
        </Tab.List>
        <Tab.Panels className={panelClassName}>
          {data.map((item: any, index: any) => (
            <Tab.Panel className={panelClassName} key={index}>
              {item.contentText}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </>
  )
}
