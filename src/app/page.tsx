import Nav from '@/components/Nav/Nav'
import StatField from '@/components/StatField/StatField'
import React from 'react'
import Sidebar from '@/components/Sidebar/Sidebar'
import { IoIosStats } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa6";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { MdPlaylistAddCheckCircle } from "react-icons/md";
import ExpenseTrack from '@/components/ExpenseTrack/ExpenseTrack';
import Revenue from '@/components/Revenue/Revenue';
import PieChart from '@/components/PieChart/PieChart';
import Trafic from '@/components/Trafic/Trafic';
import ComplexTable from '@/components/ComplexTable/ComplexTable';
import Tasks from '@/components/Tasks/Tasks';
import DataTable from '@/components/Tables/Tables';
import CalendarComp from '@/components/Calender/Calender';
import Footer from '@/components/Footer/Footer';

function Home() {
  return (
   <div className='w-screen flex justify-between bg-bg'>
  
    <div className='px-1'>
      <Nav page="Main Dashboard"/>
<div>
<div className='w-full flex items-center justify-center  gap-8 flex-wrap h-max  py-4 pt-32'>
      <StatField icon={<IoIosStats/>} title='Earnings' price="$350.4" />
<StatField icon={<FaDollarSign/>} title='Spend this month' price="$642.39" />
<StatField icon={null} title='Sales' price="$573.4" desc={"+23% since last month"} />
<StatField icon={<FaDollarSign/>} title='Your balance' price="$1000" />
<StatField icon={<MdPlaylistAddCheckCircle/>} title='New tasks'  tasks={150}/>
<StatField icon={<HiClipboardDocumentList/>} title='Total Projects'  tasks={2935}/>
      </div>

      {/* charts */}
      <div className='w-full flex items-start justify-center gap-8 flex-wrap  h-max p-4'>
<ExpenseTrack/>
<Revenue/>
<DataTable/>
<Trafic/>
<PieChart/>
<ComplexTable/>
<Tasks/>
<CalendarComp/>


         </div>
         <Footer/>
</div>
    </div>
   </div>
  )
}

export default Home 