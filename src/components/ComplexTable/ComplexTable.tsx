"use client"
import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import {  Progress } from 'antd';
import { FaCheckCircle, FaTimesCircle, FaExclamationCircle } from 'react-icons/fa';
// import './table.css'; // Import the CSS file

interface DataType {
  key: React.Key;
  name: string;
  status: any;
  date: string;
  progress:any
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'NAME',
    dataIndex: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title:"STATUS",
    dataIndex:"status"
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

const data = [
  {
    key: '1',
    name: 'Horizon UI PRO',
    status: (
      <div className='flex items-center justify-center gap-4'>
        <FaCheckCircle className='text-green-500' />
        <span className='font-semibold text-custom_blue'>Approved</span>
      </div>
    ),
    date: '18 Apr 2022',
    progress: <Progress percent={100} strokeColor="#4c6ef5" />,
  },
  {
    key: '2',
    name: 'Horizon UI Free',
    status: (
      <div className='w-[100px]  flex items-center justify-betweeen gap-4'>
        <FaTimesCircle className='text-red-500' />
        <span className='font-semibold text-custom_blue'>Disable</span>
      </div>
    ),
    date: '18 Apr 2022',
    progress: <Progress percent={30} strokeColor="#4c6ef5" />,
  },
  {
    key: '3',
    name: 'Marketplace',
    status: (
      <div className='w-[100px]  flex items-center justify-between  pe-8'>
        <FaExclamationCircle className='text-yellow-500' />
        <span className='font-semibold text-custom_blue'>Error</span>
      </div>
    ),
    date: '20 May 2021',
    progress: <Progress percent={100} strokeColor="#4c6ef5" />,
  },
  {
    key: '4',
    name: 'Weekly Updates',
    status: (
      <div className='flex items-center justify-center gap-4'>
        <FaCheckCircle className='text-green-500' />
        <span className='font-semibold text-custom_blue'>Approved</span>
      </div>
    ),
    date: '12 Jul 2021',
    progress: <Progress percent={50} strokeColor="#4c6ef5" />,
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

function ComplexTable() {
  return (
    <div className='w-[48%] min-h-[300px] bg-white rounded-lg py-8 overflow-hidden px-4'>
      <h1 className='font-semibold text-custom_blue  px-8 text-2xl'>Complex Table</h1>
      <Table
        className="custom-table w-full h-full" // Apply the custom CSS class
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

export default ComplexTable;
