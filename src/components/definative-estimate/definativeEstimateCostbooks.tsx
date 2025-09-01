// src/components/definitiveestimate/Costbook.tsx
import React from "react";
import {
  Box,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

// ✅ Import theme
import theme from "../../theme";

const rows = [
  { id: 1, sno: 1, name: "cat1", description: "specification" },
  { id: 2, sno: 2, name: "name", description: "specification" },
];

const Costbook: React.FC = () => {
  const columns: GridColDef[] = [
    { field: "sno", headerName: "S.NO", width: 80 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "description", headerName: "Description", flex: 1.5 },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      renderCell: () => (
        <IconButton>
          <CheckCircleIcon sx={{ color: "green", fontSize: 32 }} />
        </IconButton>
      ),
    },
  ];

  return (
    <Box p={3}>
      {/* Title */}
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Cost Book
      </Typography>

      {/* Search Bar */}
      <Stack alignItems="flex-end" mb={2}>
        <TextField
          placeholder="Search"
          size="small"
          sx={{ minWidth: 250 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      {/* DataGrid Table */}
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 25]}
          disableSelectionOnClick
          sx={{
            bgcolor: theme.palette.background.default,
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: "8px",
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.main,
              fontWeight: "bold",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${theme.palette.divider}`,
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: theme.palette.action.hover,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Costbook;
