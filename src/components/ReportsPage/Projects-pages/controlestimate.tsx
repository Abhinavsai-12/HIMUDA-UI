// src/components/tenderspage/TendersMain.tsx
import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

// Button Icons
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import FilterListIcon from "@mui/icons-material/FilterList";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

// ✅ Import theme
import theme from "@/theme";

const rows = [
  {
    id: 1,
    sno: 1,
    name: "Tender 1",
    description: "Detailed notification inviting tender for: specification",
  },
];

const columns: GridColDef[] = [
  { field: "sno", headerName: "S.NO", width: 80 },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "description", headerName: "Description", flex: 2 },
];

const ControlEstimateReport: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box p={3}>
      {/* Title */}
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Control Estimate Report
      </Typography>

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

export default ControlEstimateReport;
