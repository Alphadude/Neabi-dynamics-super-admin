import React from 'react'

import { DataGrid } from '@mui/x-data-grid'
import Layout from '../components/Layout'
const Dashboard = () =>{
  return(
    <Layout showStat={true}>
      <section className="flex flex-col gap-60">
        <div>
          <div className="p-6 border-2 border-white shadow-lg rounded-sm  p-6 bg-white h-[160px]">
            <h1 className="pb-8">Invoice Avalibility</h1>
            <div className ="flex gap-2">
              <div className="border-2 rounded-lg">
                <select name="Invoice" id="invoice" value="invoice" className="text-sm indent-4 py-2 bg-[#FFFFFF] text-[#737373] w-full border-1 rounded-sm border-[#E6E6E6] hover:border-[#F4511E] focus:border-[#F4511E] w-56 px-4 py-2">
                  <option value="">Invoice number</option>
                </select>
              </div>
              <div className="flex border-2 rounded-lg">
                <input name="Date" id="date" placeholder="Jan 20, 2022" className="text-sm indent-4 py-2 bg-[#FFFFFF] text-[#737373] w-full border-1 rounded-sm border-[#E6E6E6] hover:border-[#F4511E] focus:border-[#F4511E] border-r-2 w-56 px-12 py-2">
                </input>

                <select name="Time" id="time" value="time" className="text-sm indent-4 py-2 bg-[#FFFFFF] text-[#737373] w-full border-1 rounded-sm border-[#E6E6E6] hover:border-[#F4511E] focus:border-[#F4511E] w-32 px-4 py-2">
                  <option value="">10AM</option>
                </select>
              </div>
              <div className="border-2 rounded-lg">
                <button className="bg-blue-500 text-white px-6 py-2">
                  Check
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default Dashboard
