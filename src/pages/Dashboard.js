import React from 'react'

import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { dashboardData } from "../Utils/formData.js";

import Graph from '../images/dash/Graph.svg'
import Layout from "../components/Layout.js";
import Filter from "../images/dash/Filter.svg";

const Dashboard = () =>{
  const columns = [
    {field: "number", headerName: "No", },
    {
      field: "code",
      headerName: "Code",
      type: "number",
      headerAlign: "left",
      align: "left",
      
    },
    {
     field: "name",
     headerName: "Full Name",
     cellClassName: "name-column--cell",
   },
   {
     field: "email",
     headerName: "Email",
     type: "number",
     headerAlign: "left",
     align: "left",
   },
   {
     field: "details",
     headerName: <img src={Filter} alt="" />,
     
     renderCell: ({ row: { details } }) => {
          return (
            <Button
              variant="contained"
              href="#contained-buttons"
              style={{
                  borderRadius: "4px",
                  backgroundColor: "#006AFF",
                  padding: "12px 25px",
                  fontSize: { xs: '7px', sm: '8px' },
              }}
              >
              Details
            </Button>
          );
        },
      },
    ];

  return(
    <Layout showStat={true}>
      <section className="ml-8 md:ml-0 m-2 p-2 flex flex-col gap-60 w-[53%]">
        <div>
          <div className="p-4 border-2 border-white shadow-lg rounded-sm p-6 bg-white w-[87vw] md:w-full h-[120px]">
            <h1 className="pb-4">Invoice Avalibility</h1>
            <div className ="md:px-4 flex gap-2">
              <div className="border-2 rounded-lg">
                <select name="Invoice" id="invoice" value="invoice" className="text-xs md:text-sm md:indent-4 bg-[#FFFFFF] text-[#737373] border-1 rounded-sm border-[#E6E6E6] hover:border-[#F4511E] focus:border-[#F4511E] w-16 md:w-40 md:px-3 py-2">
                  <option value="">Invoice number</option>
                </select>
              </div>
              <div className="ml-0 md:ml-4 flex border-2 rounded-lg">
                <input name="Date" id="date" placeholder="Jan 20, 2022" className="text-xs md:text-sm indent-2 md:indent-4 bg-[#FFFFFF] text-[#737373] border-1 rounded-sm border-[#E6E6E6] hover:border-[#F4511E] focus:border-[#F4511E] border-r-2 w-24 md:w-44 md:px-8 py-2">
                </input>

                <select name="Time" id="time" value="time" className="text-xs md:text-sm md:indent-6 bg-[#FFFFFF] text-[#737373] border-1 rounded-sm border-[#E6E6E6] hover:border-[#F4511E] focus:border-[#F4511E] w-14 md:w-32 md:px-4 py-2">
                  <option value="">10AM</option>
                </select>
              </div>
              <div className="border-2 rounded-lg">
                <button className="bg-[#006AFF] text-white text-xs md:text-sm px-2 py-2 md:px-6 md:py-2 hover:bg-blue-400">
                  Check
                </button>
              </div>
            </div>
          </div>

          <div className="mt-2 p-2 md:p-4 border-2 border-white shadow-lg rounded-sm  p-6 bg-white w-[87vw] md:w-full h-[47%]">
          <Box 
              m="14px"
              sx={{ width: '100%' }}
              >
            <h1 className="font-bold">HMO on duty</h1>
            <Box
              m="5px 0 0 0"
              height="34vh"
              sx={{
                width: "100%",

                "& .MuiDataGrid-root": {
                  border: "none",
                },
                "& .MuiDataGrid-cell": {
                  borderTop: "none",
                },
                "& .MuiDataGrid-columnHeaders": {

                  borderTop: "none",
                },
                "& .MuiDataGrid-footerContainer": {
                  borderTop: "none",
                  display:"none",
                },
              }}
              >
               <DataGrid
                rows={dashboardData}
                columns={columns}
                sx={{ overflowX: 'scroll' }}
                />
            </Box>
          </Box>
          </div>

          <div className="mx-0 w-[75vw]  h-[25vh] md:w-[100%] md: h-40">
            <img src={Graph} alt="" />
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default Dashboard
