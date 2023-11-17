import Table from './table'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import Button from '../button/button'
import EthLogo from '../../../assets/images/eth_logo.png'

const imgs = [
  {
    src: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    alt: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    alt: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    alt: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    alt: '',
  },
]

const cryptoData = [
  {
    src: EthLogo,
    name: 'Ethereum',
    cr_abbreviation: 'ETH',
    apy: 'APY +3.14 %',
    cr_value: '1.0567',
    fiat_value: '2 074.8401',
    fiat_abbreviation: '$',
  },
]

const dataUsers = [
  {
    name: 'Rebecca Johnsons',
    email: 'rebacca.johnsons@example.com',
    src: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    designation: 'Senior Executive',
    companyName: 'Company name',
    status: 'Active',
    role: 'Admin',
  },
  {
    name: 'Rebecca Johnsons',
    email: 'rebacca.johnsons@example.com',
    src: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    designation: 'Senior Executive',
    companyName: 'Company name',
    status: 'Active',
    role: 'Admin',
  },
  {
    name: 'Rebecca Johnsons',
    email: 'rebacca.johnsons@example.com',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    designation: 'Senior Executive',
    companyName: 'Company name',
    status: 'Active',
    role: 'Admin',
  },
]

const dataProjects = [
  {
    projectName: 'Nike',
    timeDuration: '42h',
    status: 'Active',
    progress: 20,
    members: imgs,
  },
  {
    projectName: 'Adidas',
    timeDuration: '23h',
    status: 'Active',
    progress: 45,
    members: imgs,
  },
  {
    projectName: 'Amazon',
    timeDuration: '150h',
    status: 'Active',
    progress: 60,
    members: imgs,
  },
  {
    projectName: 'Apple',
    timeDuration: '348h',
    status: 'Active',
    progress: 15,
    members: imgs,
  },
]

const usersColumn = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Designation',
    accessor: 'designation',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Role',
    accessor: 'role',
  },
  {
    id: 'expander',
    Cell: ({ row }: { row: any }) => {
      //TODO: change onClick function for editing
      return <Button onClick={() => console.log(row)} type='info outline' text='edit' />
    },
  },
]

const projectColumn = [
  {
    Header: 'Project Name',
    accessor: 'projectName',
  },
  {
    Header: 'Time Duration',
    accessor: 'timeDuration',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Progress',
    accessor: 'progress',
  },
  {
    Header: 'Members',
    accessor: 'members',
  },
]

const AccountInvestmentsColumn = [
  {
    Header: 'Name',
    accessor: 'cr_name',
  },
  {
    Header: 'Crypto Value',
    accessor: 'cr_value',
  },
  {
    Header: 'Fiat value',
    accessor: 'fiat_value',
  },
]

export default {
  title: 'Table',
  component: Table,
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

export const UsersTable = Template.bind({})
UsersTable.args = {
  columnsCustom: usersColumn,
  data: dataUsers,
}

export const ProjectsTable = Template.bind({})
ProjectsTable.args = {
  columnsCustom: projectColumn,
  data: dataProjects,
}

