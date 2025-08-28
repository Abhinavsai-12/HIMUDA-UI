// src/pages/Assemblies.tsx
import React from "react";
import {
  Box,
  Button,
  TextField,
  Stack,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

// Button Icons
import AddIcon from "@mui/icons-material/Add";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import FilterListIcon from "@mui/icons-material/FilterList";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

// ✅ Import theme directly
import theme from "@/theme";

const rows = [
  {
    id: 1,
    sno: 1,
    name: "M-30 Grade Concrete",
    description: "M-30 Grade Concrete type",
    price: "54.55/cum",
    premium: "0.0",
  },
  {
    id: 2,
    sno: 2,
    name: "Grade Concrete",
    description: "M-30 Grade Concrete type",
    price: "54.55/cum",
    premium: "0.0",
  },
  {
    id: 3,
    sno: 3,
    name: "Concrete",
    description: "M-30 Grade Concrete type",
    price: "54.55/cum",
    premium: "0.0",
  },
];

// ✅ Removed the actions column
const columns = [
  { field: "sno", headerName: "S.NO", width: 80 },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "description", headerName: "Description", flex: 1.5 },
  { field: "price", headerName: "Price", flex: 1 },
  { field: "premium", headerName: "Premium", flex: 1 },
];

const Assemblies: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box p={3}>
      {/* Search + Actions */}
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        mb={2}
        flexWrap="wrap"
      >
        {/* Search */}
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

        {/* Buttons with Icons */}
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              "&:hover": { bgcolor: theme.palette.secondary.main },
            }}
            onClick={() =>
              navigate("/Reports/costing-master-assemblies/create")
            }
          >
            Add
          </Button>
          <Button
            variant="contained"
            startIcon={<ViewColumnIcon />}
            sx={{
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              "&:hover": { bgcolor: theme.palette.secondary.main },
            }}
          >
            Columns
          </Button>
          <Button
            variant="contained"
            startIcon={<FilterListIcon />}
            sx={{
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              "&:hover": { bgcolor: theme.palette.secondary.main },
            }}
          >
            Filters
          </Button>
          <Button
            variant="contained"
            startIcon={<FileDownloadIcon />}
            sx={{
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              "&:hover": { bgcolor: theme.palette.secondary.main },
            }}
          >
            Export
          </Button>
        </Stack>
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
            border: "1px solid #ccc",
            borderRadius: "6px",

            // ✅ Header background & text fixed
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: `${theme.palette.primary.main} !important`,
              color: `${theme.palette.primary.main} !important`,
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: "bold",
              fontSize: "0.95rem",
            },

            // ✅ Cells & hover
            "& .MuiDataGrid-cell": {
              borderBottom: "1px solid #e0e0e0",
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Assemblies;
