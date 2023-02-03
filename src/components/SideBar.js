import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom';

import { Nav, Extra } from '../Utils/data.js'
import Logo from '../images/Nav/logo.svg'
import Logout from '../images/sideBar/Logout.svg'


const SideBar = () =>{
  const [selected, setSelected] = useState(0);
  const [report, setReport] = useState(-1);

  return(
    <section className="sideBar">
      <div className="fixed absolute w-10 h-[100vh] md:w-60 bg-[#0B1C2E] shadow-sm">
        {/*Logo*/}
        <div className="flex m-2 w-6 pb-4 pt-4 md:px-10 md:w-full ">
            <img src={Logo} alt="Naebi's Logo" />
          <h1 className="hidden md:flex mr-2 font-bold text-[8px] md:text-[12px] text-white text-center leading-9">Naebi Dynamic Concepts</h1>
        </div>

        {/*Navigation*/}
        <div className="flex flex-col">
          {Nav.map ((item, index) =>(
            <NavLink
             activeClassName="menu-item active"
             className="menuItem"
             key={index}
             onClick={() => {setSelected(index)}}
             to={item.link}
             >
              <div className="flex menu-item gap-2">
                <div className="flex m-2 md:pl-2  md:py-1">
                  <img src={item.src} alt="" className="" />
                  <p className="hidden md:flex text-white text-center justify-center ml-2 text-[12px] leading-5 font-[500]">{item.name}</p>
                </div>
              </div>
            </NavLink>
        ))};
      </div>

      <div className="hidden md:flex border-t-[1px] border-white m-4"></div>

      <div className="flex flex-col">
        <h2 className="hidden md:flex pl-6 py-3 mx-5 text-[14px] text-white opacity-50 leading-6 font-[400]">Report</h2>

        {Extra.map ((item, index) =>(
          <NavLink
           activeClassName="menu-item active"
           className="menuItem"
           key={index}
           onClick={() => {setReport(index)}}
           to={item.link}
           >
            <div className="flex menu-item gap-2">
              <div className="flex m-2 md:pl-2  md:py-1">
                <img src={item.src} alt="" className="" />
                <p className="hidden md:flex text-white text-center justify-center ml-2 text-[12px] leading-5 font-[500]">{item.name}</p>
              </div>
            </div>
          </NavLink>
        ))};
      </div>

      <div className="m-2 mt-10 mb-16">
        <Link to="/log-out">
          <button className="flex md:w-44 md:px-10 py-3 md:mx-5 text-center mx-auto md:bg-gray-500 hover:border-gray-500 hover:bg-[#0B1C2E] md:border-2 md:border-gray-500">
            <img src={Logout} alt="logout" />
            <p className="hidden md:flex ml-2 text-white">Logout</p>
          </button>
        </Link>
      </div>
    </div>
  </section>
  )
}
export default SideBar
