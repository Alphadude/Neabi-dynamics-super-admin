import React from 'react'

import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { dashboardData } from "../Utils/formData.js";

import Graph from '../images/dash/Graph.svg'
import Layout from "../components/Layout.js";
import Filter from "../images/dash/Filter.svg";

const Dashboard = () =>{
  const columns = [
    {field: "number", headerName: "No", flex: 0.2,},
    {
      field: "code",
      headerName: "Code",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 0.4,
    },
    {
     field: "name",
     headerName: "Full Name",
     flex: 1.16,
     cellClassName: "name-column--cell",
   },
   {
     field: "email",
     headerName: "Email",
     type: "number",
     flex: 1.8,
     headerAlign: "left",
     align: "left",
   },
   {
     field: "details",
     headerName: <img src={Filter} alt="" />,
     flex: 0.5,
     renderCell: ({ row: { details } }) => {
          return (
            <Button
              variant="contained"
              href="#contained-buttons"
              style={{
                  borderRadius: "4px",
                  backgroundColor: "#006AFF",
                  padding: "12px 25px",
                  fontSize: "12px"
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
      <section className="m-12 flex flex-col gap-60">
        <div>
          <div className="p-4 border-2 border-white shadow-lg rounded-sm  p-6 bg-white h-[120px]">
            <h1 className="pb-4 text-blue-300">Invoice Avalibility</h1>
            <div className ="flex gap-2">
              <div className="border-2 rounded-lg">
                <select name="Invoice" id="invoice" value="invoice" className="text-sm indent-4 bg-[#FFFFFF] text-[#737373] w-full border-1 rounded-sm border-[#E6E6E6] hover:border-[#F4511E] focus:border-[#F4511E] w-56 px-3 py-2">
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
                <button className="bg-[#006AFF] text-white px-6 py-2 hover:bg-blue-700">
                  Check
                </button>
              </div>
            </div>
          </div>

          <div className="mt-2 p-4 border-2 border-white shadow-lg rounded-sm  p-6 bg-white h-[47%]">
          <Box m="14px">
            <h1 className="font-bold">HMO on duty</h1>
            <Box
              m="5px 0 0 0"
              height="34vh"
              sx={{
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

                />
            </Box>
          </Box>
          </div>

          <div className="mx-0 w-[100%] h-40">
            <img src={Graph} alt="" />
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default Dashboard
