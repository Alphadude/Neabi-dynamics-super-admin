import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import SideBar from '../components/SideBar'
import Stat from '../components/Stat'
const Dashboard = () =>{
  return(
    <section className="flex gap-60">
      <div>
      <SideBar />
      </div>
      <div className="right-64">
      <Stat />
      </div>
      <div>
      </div>
    </section>
  )
}
export default Dashboard
