"use client"
import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import './table.css'; // Import the CSS file

interface DataType {
  key: React.Key;
  name: string;
  progress: string;
  quantity: number;
  date: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'NAME',
    dataIndex: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'PROGRESS',
    dataIndex: 'progress',
  },
  {
    title: 'QUANTITY',
    dataIndex: 'quantity',
  },
  {
    title: 'DATE',
    dataIndex: 'date',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Horizon UI PRO',
    progress: "17.5%",
    quantity: 2458,
    date: '12 Jan 2021'
  },
  {
    key: '2',
    name: 'Horizon UI Free',
    progress: "10.8%",
    quantity: 1485,
    date: '21 Feb 2021'
  },
  {
    key: '3',
    name: 'Weekly Update',
    progress: "21.3%",
    quantity: 1024,
    date: '13 Mar 2021'
  },
  {
    key: '4',
    name: 'Venus 3D Asset',
    progress: "31.5%",
    quantity: 858,
    date: '24 Jan 2021',

  },
  {
    key: '5',
    name: 'Marketplace',
    progress: "12.2%",
    quantity: 258,
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

function DataTable() {
  return (
    <div className='w-[48%] min-h-[300px] bg-white rounded-lg py-8 overflow-hidden px-4'>
      <h1 className='font-semibold text-custom_blue  px-8 text-2xl'>Check Table</h1>
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

export default DataTable;
