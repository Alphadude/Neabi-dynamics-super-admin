import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import SideBar from '../components/SideBar'
import Stat from '../components/Stat'
const Dashboard = () =>{
  return(
    <section className="grid grid-cols-3 gap-[1px]">
      <div>
      <SideBar />
      </div>
      <div>
      <Stat />
      </div>
      <div>
      </div>
    </section>
  )
}
export default Dashboard
