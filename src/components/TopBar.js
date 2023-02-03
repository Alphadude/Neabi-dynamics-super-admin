import React from 'react'

import Not from '../images/Nav/notification.svg'
import Search from '../images/Nav/search.svg'


const TopBar = () =>{
  return(
    <section className="top-0 pb-32 flex justify-end">
      <div className="mt-1 flex ">
        <div className="navIcon top-2 relative cursor-pointer mr-6">
          <span className="absolute left-3 top-0 z-50 flex h-2 w-2 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-[10px] text-white"></span>
          <img src={Not} alt="icon" />
        </div>

        <div className="mr-2">
          <input type="text" placeholder="Search here" className="relative rounded-lg shadow-lg w-[366px] h-[37px] px-4" />
          <button>
            <img src={Search} alt="icon" className="absolute right-12 top-8"/>
          </button>
        </div>
      </div>
    </section>
  )
}
export default TopBar
