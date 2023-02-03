import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { managementData } from "../Utils/formData.js";

import Layout from "../components/Layout.js";

const Companies = () => {
  const columns = [
    {field: "number", headerName: "No" },
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
     flex: 1,
     cellClassName: "name-column--cell",
   },
   {
     field: "email",
     headerName: "Email",
     type: "number",
     flex: 1,
     headerAlign: "left",
     align: "left",
   },
   {
     field: "details",
     headerName: " ",
     flex: 1,
     renderCell: ({ row: { details } }) => {
          return (
            <Button variant="contained" href="#contained-buttons">
              Details
            </Button>
          );
        },
      },
    ];


  return (
    <Layout showStat={true}>
      <div className="m-6 p-4 border-2 border-white shadow-lg rounded-sm  p-6 bg-white h-[630px]">
        <Box m="16px">
          <h1 className="font-bold">Helicopter Management Officer</h1>
          <Box m="10px 0 0 0" height="65vh" width="49vw">
             <DataGrid
              rows={managementData}
              columns={columns}
              />
          </Box>
        </Box>
      </div>
    </Layout>
  );
};

export default Companies;
