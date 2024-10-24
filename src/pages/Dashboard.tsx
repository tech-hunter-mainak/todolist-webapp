import React from 'react'
import Sidebar from '@/components/SideNavbar'

function Dashboard() {
  return (
    <React.Fragment>
      <div className="flex flex-row flex-nowrap w-screen">
        <div className=''>
          <Sidebar />
        </div>
        <div className="w-auto h-auto bg-slate-500 flex flex-wrap "></div>
      </div>
    </React.Fragment>
  )
}

export default Dashboard