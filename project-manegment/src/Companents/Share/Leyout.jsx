import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'
function Leyout() {
  return (
  
    <div className='bg-neutral-100 h-screen  overflow-hidden flex flex-row '>
    <SideBar/>
       
   <div className="flex flex-col flex-1">
  <Header/>
  

   <div className='flex-1 p-4 min-h-0 overflow-auto'>
    {<Outlet/>}
    </div>
    </div>
    </div>
  )
}

export default Leyout