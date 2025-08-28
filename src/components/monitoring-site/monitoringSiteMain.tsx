import React from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  IconButton,
  Chip,
  InputAdornment,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SearchIcon from '@mui/icons-material/Search';
import StyledDataGrid from '@/components/StyledDataGrid';
import { Link } from 'react-router-dom';

const rawRows = [
  {
    visitId: 'VIS-001',
    projectId: 'PRJ-001',
    siteName: 'Bridge Construction Zone',
    visitedBy: 'JE Anil Kumar',
    visitDate: '2025-07-10',
    photos: 'bridge_visit_1.jpg',
    notes: 'Bridge deck slab work in progress. Safety compliance noted.',
    defectsFound: 'false',
  },
  {
    visitId: 'VIS-002',
    projectId: 'PRJ-002',
    siteName: 'Water Tank Installation',
    visitedBy: 'XEN Meena Sharma',
    visitDate: '2025-07-07',
    photos: 'tank_site_2.jpg',
    notes: 'Leakage observed in inlet valve. Needs immediate fix.',
    defectsFound: 'true',
  },
  {
    visitId: 'VIS-003',
    projectId: 'PRJ-003',
    siteName: 'Housing Block A',
    visitedBy: 'JE Rajiv Verma',
    visitDate: '2025-07-04',
    photos: 'housing_block_a_visit.jpg',
    notes: 'All walls completed. Finishing work underway.',
    defectsFound: 'false',
  },
];

const rows = rawRows.map((row, index) => ({
  id: index + 1,
  sno: index + 1,
  ...row,
}));

const columns = [
  { field: 'sno', headerName: 'S.No', flex: 0.5, sortable: false },
  { field: 'visitId', headerName: 'Visit ID', flex: 1 },
  { field: 'projectId', headerName: 'Project ID', flex: 1 },
  { field: 'siteName', headerName: 'Site', flex: 1 },
  { field: 'visitedBy', headerName: 'Visited By (JE/XEN)', flex: 1.5 },
  { field: 'visitDate', headerName: 'Visit Date', flex: 1 },
  { field: 'photos', headerName: 'Site Images', flex: 1.5 },
  { field: 'notes', headerName: 'Observation Notes', flex: 2 },
  {
    field: 'defectsFound',
    headerName: 'Defect Found',
    flex: 1,
    renderCell: ({ value }) => {
      if (value === 'true') {
        return <Chip label="true" color="success" variant="outlined" />;
      }

      if (value === 'false') {
        return <Chip label="false" color="error" variant="outlined" />;
      }

      return (
        <Chip
          label="Pending"
          sx={{
            backgroundColor: '#FFEB3B',
            color: '#000',
            fontWeight: 500,
          }}
        />
      );
    },
  },
  {
    field: 'actions',
    headerName: 'Actions',
    flex: 1.2,
    sortable: false,
    renderCell: (params: any) => (
      <Stack direction="row" spacing={1}>
        <IconButton
          color="info"
          size="small"
          onClick={() => console.log('View', params.row)}
        >
          <VisibilityIcon />
        </IconButton>
        <IconButton
          color="primary"
          size="small"
          onClick={() => console.log('Edit', params.row)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          color="error"
          size="small"
          onClick={() => console.log('Delete', params.row)}
        >
          <DeleteIcon />
        </IconButton>
      </Stack>
    ),
  },
];

const MonitoringSiteMain = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        ml: {
          xs: 0,
          sm: 4,
          md: 8,
        },
        mr: {
          xs: 0,
          sm: 2,
        },
      }}
    >
      {' '}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        gap={2}
      >
        <Typography variant="h4" fontWeight="bold">
          Monitoring Site & Visits
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            placeholder="Search..."
            sx={{ minWidth: 200 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
          <Link to="/monitoring-site-visits/create">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </Stack>
      </Box>
      <Box width="100%">
        <StyledDataGrid rows={rows} columns={columns} />
      </Box>
    </Box>
  );
};

export default MonitoringSiteMain;
