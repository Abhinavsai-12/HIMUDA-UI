// src/pages/ResourcesMain.tsx
import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  IconButton,
  InputAdornment,
  useTheme,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import FilterListIcon from "@mui/icons-material/FilterList";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

// ✅ Import theme
import theme from "@/theme";

const rows = [
  { id: 1, sno: 1, name: "Stone aggregate 20 mm", description: "Stone aggregate 20 mm", price: "700.0/cum" },
  { id: 2, sno: 2, name: "Stone aggregate 25 mm", description: "Stone aggregate 25 mm", price: "800.0/cum" },
  { id: 3, sno: 3, name: "Stone aggregate 30 mm", description: "Stone aggregate 30 mm", price: "900.0/cum" },
];

const ResourcesMain: React.FC = () => {
  const muiTheme = useTheme();
  const navigate = useNavigate();

  const columns: GridColDef[] = [
    { field: "sno", headerName: "S.NO", width: 90 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "description", headerName: "Description", flex: 1.5 },
    { field: "price", headerName: "Price", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: () => (
        <Stack direction="row" spacing={1}>
          <IconButton color="info" size="small">
            <VisibilityIcon />
          </IconButton>
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
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Resources
      </Typography>

      {/* Search + Action Buttons */}
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        mb={2}
        flexWrap="wrap"
      >
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

        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              "&:hover": { bgcolor: theme.palette.primary.dark },
            }}
            onClick={() => navigate("/reports/costing-master-resources/create")}
          >
            Add
          </Button>
          <Button
            variant="contained"
            startIcon={<ViewColumnIcon />}
            sx={{
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              "&:hover": { bgcolor: theme.palette.primary.dark },
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
              "&:hover": { bgcolor: theme.palette.primary.dark },
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
              "&:hover": { bgcolor: theme.palette.primary.dark },
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
            bgcolor: muiTheme.palette.background.default,
            border: "1px solid #ccc",
            borderRadius: "6px",
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: muiTheme.palette.primary.main,
              color: muiTheme.palette.primary.main,
              fontWeight: "bold",
              fontSize: "0.95rem",
            },
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

export default ResourcesMain;
