import { Box, Typography,Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Layout from "../components/Layout.js";
import { companiesData } from "../Utils/formData.js";


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
     headerName: "Name",
     flex: 1,
     cellClassName: "name-column--cell",
   },
   {
     field: "category",
     headerName: "Time Onboarding",
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
      <Box m="20px">
        <h1 className="font-bold"> AIRLINES</h1>
        <Box m="40px 0 0 0" height="80vh">
          <DataGrid
            rows={companiesData}
            columns={columns}
            />
        </Box>
      </Box>
    </Layout>
  );
};

export default Companies;
