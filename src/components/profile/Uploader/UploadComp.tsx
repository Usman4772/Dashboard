"use client"
import React from 'react';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import { MdUpload } from "react-icons/md";
const { Dragger } = Upload;

const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const UploadComp: React.FC = () => (
<div className='flex w-full items-center justify-center'>
<Dragger {...props}>
    <p className="ant-upload-drag-icon w-full flex items-center justify-center text-[5rem] text-blue-800 ">
     <MdUpload/>
    </p>
    <p className="ant-upload-text w-full flex items-center justify-center text-blue-800 text-2xl font-bold font-sans">Upload Files</p>
    <p className="ant-upload-hint w-full text-center text-gray-400 text-md">
    Drag and Drop here
    </p>
  </Dragger>
</div>
);

export default UploadComp;