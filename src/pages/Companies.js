import { Box, Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { companiesData } from "../Utils/formData.js";

import Layout from "../components/Layout.js";
import Filter from "../images/dash/Filter.svg";

const HMO = () => {
  const columns = [
    {field: "number", headerName: "No", width:5 },
    {
      field: "code",
      headerName: "Code",
      type: "number",
      width:60,
      headerAlign: "left",
      align: "left",
      
    },
    {
     field: "name",
     width:192,
     headerName: "Full Name",
   },
   {
     field: "category",
     headerName: "Category",
     width:220,
     headerAlign: "left",
     align: "left",
   },
   {
     field: "details",
     headerName: <img src={Filter} alt="" />,
     width:100,
     renderCell: ({ row: { details } }) => {
          return (
            <Button
              variant="contained"
              href="#contained-buttons"
              style={{

                  borderRadius: "4px",
                  backgroundColor: "#006AFF",
                  padding: "12px 25px",
                  fontSize: "9px",
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
        <div className=" mt-10  m-2 p-2 ml-16 md:ml-0 md:m-8 md:p-4 border-2 border-white shadow-lg rounded-sm bg-white w-[80%] md:w-[53%] h-[90%]">
          <Box 
           sx={{
            height: 570,
            width: '97%',
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

          }}>
            
          <Typography
            variant="h6"
            component="h6"
            sx={{ textAlign: 'left', mt: 2, mb: 2 }}
          >
            Companies
          </Typography>
        
           <DataGrid
              rows={companiesData}
              columns={columns}
            />
                
            </Box>
          </div>
        </Layout>
      );
    };
    
    export default HMO;
    
