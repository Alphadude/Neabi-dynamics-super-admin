import { Box, Typography,Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { managementData } from "../Utils/formData.js";


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
    <Box m="20px">
      <h1 className="font-bold">Helicopter Management Officer</h1>
      <Box m="40px 0 0 0" height="80vh">
         <DataGrid
          rows={managementData}
          columns={columns}
          />
      </Box>
    </Box>
  );
};

export default Companies;
