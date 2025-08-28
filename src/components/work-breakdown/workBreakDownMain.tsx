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
    wbsId: 'WBS-001',
    projectId: 'PRJ-001',
    taskName: 'Foundation Excavation',
    createdBy: 'XEN A',
    status: 'Active',
    defectsLinked: 'true',
  },
  {
    wbsId: 'WBS-002',
    projectId: 'PRJ-001',
    taskName: 'Reinforcement Laying',
    createdBy: 'XEN B',
    status: 'Locked',
    defectsLinked: 'false',
  },
  {
    wbsId: 'WBS-003',
    projectId: 'PRJ-002',
    taskName: 'Concrete Pouring',
    createdBy: 'XEN C',
    status: 'Active',
    defectsLinked: 'true',
  },
];

const rows = rawRows.map((row, index) => ({
  id: index + 1,
  sno: index + 1,
  ...row,
}));

const columns = [
  { field: 'sno', headerName: 'S.No', flex: 0.5 },
  { field: 'wbsId', headerName: 'WBS ID', flex: 1 },
  { field: 'projectId', headerName: 'Project ID', flex: 1 },
  { field: 'taskName', headerName: 'Task Name', flex: 1.5 },
  { field: 'createdBy', headerName: 'Created By (XEN)', flex: 1 },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1,
    renderCell: ({ value }) => {
      if (value === 'Active') {
        return <Chip label="Active" color="success" />;
      }

      if (value === 'Locked') {
        return <Chip label="Locked" color="error" />;
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
    field: 'defectsLinked',
    headerName: 'Defect Linked',
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

const WorkBreakDownMain = () => {
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
          Work Breakdown
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
          <Link to="/work-break-down/create">
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

export default WorkBreakDownMain;
