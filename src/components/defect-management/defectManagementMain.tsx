import React from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  IconButton,
  Avatar,
  InputAdornment,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SearchIcon from '@mui/icons-material/Search';
import StyledDataGrid from '@/components/StyledDataGrid';
import { GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

const rows = [
  {
    id: 1,
    defectId: '1',
    projectId: '1',
    location: 'Block A',
    reportedBy: 'Person 1',
    severity: 'High',
    description: 'Water .',
    correctiveAction: 'Fixed.',
    status: true,
  },
  {
    id: 2,
    defectId: '2',
    projectId: '2',
    location: 'Block B',
    reportedBy: 'Person 2',
    severity: 'Medium',
    description: 'crack',
    correctiveAction: 'Fixed.',
    status: false,
  },
  {
    id: 3,
    defectId: '3',
    projectId: '3',
    location: 'Block C',
    reportedBy: 'Person 1',
    severity: 'Low',
    description: 'dirt ',
    correctiveAction: 'Fixed .',
    status: true,
  },
  {
    id: 4,
    defectId: '4',
    projectId: '4',
    location: 'Block D',
    reportedBy: 'Person 2',
    severity: 'High',
    description: 'light',
    correctiveAction: ' Fixed.',
    status: false,
  },
];

const columns: GridColDef[] = [
  { field: 'defectId', headerName: 'Defect ID', flex: 0.5 },
  { field: 'projectId', headerName: 'Project ID', flex: 1 },
  { field: 'location', headerName: 'Location', flex: 1 },
  {
    field: 'reportedBy',
    headerName: 'Reported By',
    flex: 1,
    renderCell: ({ row }) => {
      const name = row.reportedBy;

      return (
        <Stack direction="row" alignItems="center" spacing={1}>
          <Avatar sx={{ width: 30, height: 30 }}>
            <PersonIcon fontSize="small" />
          </Avatar>
          <Typography variant="body2">{name}</Typography>
        </Stack>
      );
    },
  },
  {
    field: 'severity',
    headerName: 'Severity',
    flex: 1,
    type: 'singleSelect',
    valueOptions: ['Low', 'Medium', 'High'],
  },
  {
    field: 'description',
    headerName: 'Defect Details',
    flex: 1,
    type: 'string',
  },
  {
    field: 'correctiveAction',
    headerName: 'Corrective Action Taken',
    flex: 1,
    type: 'string',
  },
  {
    field: 'status',
    headerName: 'Resolved',
    flex: 1,
    type: 'boolean',
    renderCell: (params) => (params.value ? '✓' : '✗'),
  },
  {
    field: 'actions',
    headerName: 'Actions',
    flex: 1,
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

const DefectManagementMain = () => {
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
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        gap={2}
      >
        <Typography variant="h4" fontWeight="bold">
          Defect Management
        </Typography>

        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
          <TextField
            label="Search Defects"
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
          <Link to="/defect-management/create">
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

export default DefectManagementMain;
