"use client"
// import { Calendar, theme } from 'antd';
// import type { CalendarProps } from 'antd';
// import { Dayjs } from 'dayjs';

// const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
//   // console.log(value.format('YYYY-MM-DD'), mode);
// };

// const CalendarComp: React.FC = () => {

//   return (
    
//     <div className="w-[19.2vw] min-h-[525px] bg-white rounded-lg p-4">
//       <Calendar fullscreen={false} onPanelChange={onPanelChange} mode='month' />
//     </div> 
   
//   );
// };

// export default CalendarComp;

// // import { useState } from 'react';
// // import Calendar from 'react-calendar';

// // type ValuePiece = Date | null;

// // type Value = ValuePiece | [ValuePiece, ValuePiece];

// // export default function CalenderComp() {
// //   const [value, onChange] = useState<Value>(new Date());

// //   return (
// //     <div className="w-[19.2vw] min-h-[448px] bg-white rounded-lg p-4 ">
// //       <Calendar onChange={onChange} value={value} />
// //     </div>
// //   );
// // }





import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function CalenderComp() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

  return (
    <div className="w-[19.2vw] min-h-[525px] bg-white rounded-lg p-4">
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer components={['DateCalendar', 'DateCalendar']}>
        <DemoItem label="Calendar">
          <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} className='w-[99%]' />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
    </div>
  );
}