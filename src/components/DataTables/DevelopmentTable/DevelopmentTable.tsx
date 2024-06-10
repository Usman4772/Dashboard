"use client"
import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaWindows } from "react-icons/fa6";


interface DataType {
  key: React.Key;
  name: string;
  tech:any
  progress: string;
  date: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'NAME',
    dataIndex: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'TECH',
    dataIndex: 'tech',
  },
  {
    title: 'DATE',
    dataIndex: 'date',
  },
  {
    title: 'PROGRESS',
    dataIndex: 'progress',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Marketplace',
    tech:<div className='flex gap-2 items-center justify-center text-gray-400 text-xl'><FaApple/><IoLogoAndroid/><FaWindows/></div>,
    progress: "17.5%",
    date: '12 Jan 2021'
  },
  {
    key: '2',
    name: 'Venus DB PRO',
    progress: "10.8%",
    tech:<div className='flex gap-2 items-center justify-start text-gray-400 text-xl'><FaApple/></div>,
    date: '21 Feb 2021'
  },
  {
    key: '3',
    name: 'Venus DS',
    progress: "21.3%",
    tech:<div className='flex gap-2 items-center justify-start text-gray-400 text-xl'><FaApple/><FaWindows/></div>,
    date: '13 Mar 2021'
  },
  {
    key: '4',
    name: 'Venus 3D Asset',
    progress: "31.5%",
    tech:<div className='flex gap-2 items-center justify-center text-gray-400 text-xl'><FaApple/><IoLogoAndroid/><FaWindows/></div>,
    date: '24 Jan 2021',

  },
  {
    key: '5',
    name: 'Marketplace',
    progress: "12.2%",
    tech:<div className='flex gap-2 items-center justify-start text-gray-400 text-xl'><FaApple/><FaWindows/></div>,
    date: '24 Oct 2022'
  },
];


const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    // disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
  // defaultSelectedRowKeys: ['2', '3','4']
};

function DevelopmentTable() {
  return (
    <div className='w-[48%] h-[515px] bg-white rounded-lg py-8 overflow-hidden'>
      <h1 className='font-semibold text-custom_blue  px-8 text-2xl'>Development Table</h1>
      <Table
        className="custom-table w-full h-full px-4 bg-transparent" // Apply the custom CSS class
        pagination={false}
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        rowClassName={() => 'custom-row'} // Apply custom row class
            />
    </div>
  );
}

export default DevelopmentTable;
