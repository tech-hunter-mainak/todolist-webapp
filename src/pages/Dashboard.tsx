import React, { useState } from 'react'
import Sidebar from '@/components/SideNavbar'
import Profile from './Profile'
import { JSX } from 'react/jsx-runtime'


function Dashboard() {
  const [data, setData] = useState(<Profile />)
  const changed = (e: React.SetStateAction<JSX.Element>) => {
    setData(e);
  }
  
  return (
    <React.Fragment>
      <div className="flex flex-row flex-nowrap w-screen">
        <div className='hidden lg:block'>
          <Sidebar display = {changed}/>
        </div>
        <div className="h-screen bg-slate-500 flex flex-wrap w-full p-5 overflow-y-scroll">
          {data}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Dashboard