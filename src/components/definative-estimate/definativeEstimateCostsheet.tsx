// src/components/definitiveestimate/Costsheet.tsx
import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  IconButton,
  InputAdornment,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

// ✅ Import theme
import theme from "../../theme";

const rows = [
  {
    id: 1,
    sno: 1,
    name: "M-25 Grade Concrete",
    description: "M-30 Grade Concrete type",
    price: "4147.0/cum",
    premium: "0.0",
  },
];

const Costsheet: React.FC = () => {
  const navigate = useNavigate();

  const columns: GridColDef[] = [
    { field: "sno", headerName: "S.NO", width: 80 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "description", headerName: "Description", flex: 1.5 },
    { field: "price", headerName: "Price", flex: 1 },
    { field: "premium", headerName: "Premium", flex: 1 },
    {
      field: "manageJobs",
      headerName: "Manage Jobs",
      flex: 1,
      renderCell: () => (
        <Button
          variant="outlined"
          size="small"
          sx={{
            borderColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
            "&:hover": {
              borderColor: theme.palette.secondary.main,
              color: theme.palette.secondary.main,
            },
          }}
        >
          Manage jobs
        </Button>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      sortable: false,
      renderCell: () => (
        <Stack direction="row" spacing={1}>
          <IconButton color="primary" size="small">
            <EditIcon />
          </IconButton>
          <IconButton color="error" size="small">
            <DeleteIcon />
          </IconButton>
        </Stack>
      ),
    },
  ];

  return (
    <Box p={3}>
      {/* Title */}
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Cost Sheet
      </Typography>

      {/* Add Assembly + Add Job + Search */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
        flexWrap="wrap"
      >
        {/* Left side buttons */}
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            sx={{
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              "&:hover": { bgcolor: theme.palette.secondary.main },
            }}
            onClick={() => navigate("/projects-definative-estimate/cost-sheet/add-assembly")}
          >
            Add Assembly
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              "&:hover": { bgcolor: theme.palette.secondary.main },
            }}
            onClick={() => navigate("/projects-definative-estimate/cost-sheet/add-job")}
          >
            Add Job
          </Button>
        </Stack>

        {/* Right side search */}
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

export default Costsheet;
