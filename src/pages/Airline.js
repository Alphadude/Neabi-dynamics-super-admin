import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { airlineData } from "../Utils/formData.js";

import Layout from "../components/Layout.js";
import Filter from "../images/dash/Filter.svg";

const Airlines = () => {
  const columns = [
    {field: "number", headerName: "No", flex: 0.2, },
    {
      field: "code",
      headerName: "Code",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 0.7,
    },
    {
     field: "name",
     headerName: "Name",
     flex: 1.5,
     cellClassName: "name-column--cell",
   },
   {
     field: "category",
     headerName: "Time Onboarding",
     type: "number",
     flex: 1.8,
     headerAlign: "left",
     align: "left",
   },
   {
     field: "details",
     headerName: <img src={Filter} alt="" />,
     flex: 0.6,
     renderCell: ({ row: { details } }) => {
          return (
            <Button
              variant="contained"
              href="#contained-buttons"
              sx={{
                  padding: "12px 25px",
                  fontSize: { xs: '8px', sm: '9px' },
                  borderRadius: "4px",
                  backgroundColor: "#006AFF",
              }}
              >
              Details
            </Button>
          );
        },
      },
    ];


  return (
    <Layout showStat={true} >
    <div className=" m-2 p-2 ml-16 md:ml-0 md:m-8 md:p-4 border-2 border-white shadow-lg rounded-sm bg-white w-[95%] md:w-[53%] h-[80%]">
      <Box m="16px">
        <h1 className="font-bold">AIRLINES</h1>
        <Box
          m="10px 0 0 0"
          height="73vh"
          width="100%"
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
              rows={airlineData}
              columns={columns}
              />
          </Box>
        </Box>
      </div>
    </Layout>
  );
};

export default Airlines;
