import React from 'react'

import { Stats } from '../Utils/data.js'
import { Gen } from '../Utils/data.js'

import Pie from '../images/Stat/pie-chart.svg'
import axios from 'axios';
const Stat = () =>{
  let [balance, setBalance] =useState(0) 
  axios({
    method:"get",
    url:"http://localhost:4000/api/v1/admin/profile",
    headers:{
      Authorization:`bearer ${localStorage.getItem("token")}`
    }
  })
  .then((data)=>{
    console.log(data.data)
  })
  return(
    <section className="ml-60" >
      <div className=" h-[100vh] md:w-96 md:h-max bg-[#F8F7F1] shadow-sm px-10 py-4">
        <div className="mx-auo ">
          <h1 className="text-[16px] font-[500] leading-7 text-[#525256]">Todays Statistics</h1>
          <p className="text-[12px] font-[400] leading-7 text-[#A3A3A3]">Tue, 14 Nov. 2022. 11.30AM</p>
        </div>

        {/* <div className="mt-6 border-2 border-white shadow-lg rounded-sm  p-6 bg-white h-[190px]">
          <div className="flex justify-between">
            <h1 className="">{item.name}</h1>
            <p className="text-[#656575] text-[12px] font-[400] bg-[#F4F5F7] rounded-xs px-2 py-1">Today</p>
          </div>

          <div className="border-t-2 border-[#F8F7F1] mt-2"></div>

          <div className="mt-2 flex justify-between">
            <p className="text-[#01150C] text-[28px] font-bold leading-10 my-2">{item.price}</p>
            <span className={item.p}>{item.value}</span>
          </div>

          <p className="text-[14px] font-[300] leading-5 text-[#656575]">{item.com}</p>

          <div className="flex mt-2 text-[#525256]flex justify-between">
            <p className="text-[14px] font-[300] leading-5">{item.week}</p>
            <p className="text-[14px] font-[300] leading-5">{item.income}</p>
          </div>
        </div> */}
        {Stats.map ((item) => (
        <div className="mt-2 border-2 border-white shadow-lg rounded-sm  p-6 bg-white h-[175px]">
          <div className="flex justify-between">
            <h1 className="text-[14px]">{item.name}</h1>
            <p className="text-[#656575] text-[10px] font-[400] bg-[#F4F5F7] rounded-xs px-2 py-1">Today</p>
          </div>

          <div className="border-t-2 border-[#F8F7F1] mt-2"></div>

          <div className="mt-1 flex justify-between">
            <p className="text-[#01150C] text-[20px] font-bold leading-10 my-1">{item.price}</p>
            <span className={item.p}>{item.value}</span>
          </div>

          <p className="text-[12px] font-[300] leading-5 text-[#656575]">{item.com}</p>

          <div className="flex mt-2 text-[#525256]flex justify-between">
            <p className="text-[10px] font-[300] leading-5">{item.week}</p>
            <p className="text-[10px] font-[300] leading-5">{item.income}</p>
          </div>
        </div>
        ))}

        <div className="mt-2 mx-auto border-2 border-white shadow-lg rounded-sm  p-6 bg-white ">
          <div className="flex justify-between">
            <h1 className="text-[14px]">Invoice</h1>
            <p className="text-[#656575] text-[12px] font-[400] bg-[#F4F5F7] rounded-xs px-2 py-1">Today</p>
          </div>
          <img src={Pie} alt="Pie chart" className=" text-center mx-auto"/>

          <div className="mt-4">
            {Gen.map ((item) => (
              <div className="mt-2 flex justify-between">
                <span className={item.span}></span>
                <p className="ml-8 text-[12px] text-[#1A1919] leading-6">{item.p}</p>
                <p className={item.pv}>{item.value}</p>
                <p className={item.pr}>{item.raise}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
export default Stat
