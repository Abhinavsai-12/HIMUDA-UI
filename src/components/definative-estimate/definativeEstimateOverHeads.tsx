// src/components/definitiveestimate/OverHeads.tsx
import React from "react";
import {
  Box,
  TextField,
  Typography,
  InputAdornment,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

// ✅ Import theme
import theme from "../../theme";

const rows = [
  { id: 1, sno: 1, title: "11", percent: 22.0, type: "DR", amount: "" },
];

const OverHeads: React.FC = () => {
  const columns: GridColDef[] = [
    { field: "sno", headerName: "S.NO", width: 80 },
    { field: "title", headerName: "OverHead Title", flex: 1 },
    { field: "percent", headerName: "Overhead Percent", flex: 1 },
    { field: "type", headerName: "Overhead Type", flex: 1 },
    { field: "amount", headerName: "On Amount", flex: 1 },
  ];

  return (
    <Box p={3}>
      {/* Title */}
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        OverHeads
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

export default OverHeads;
