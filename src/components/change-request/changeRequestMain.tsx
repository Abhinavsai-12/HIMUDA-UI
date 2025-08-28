import React from 'react';
import {
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Switch,
  InputAdornment,
} from '@mui/material';
import StyledDataGrid from '@/components/StyledDataGrid';
import SearchIcon from '@mui/icons-material/Search';

const rawRows = [
  {
    requestId: 'CR-001',
    projectId: 'PRJ-001',
    raisedBy: 'JE Rajesh Kumar',
    date: '2025-07-01',
    description: 'Request to change foundation type due to soil issues.',
    status: 'Pending',
  },
  {
    requestId: 'CR-002',
    projectId: 'PRJ-002',
    raisedBy: 'XEN Meena Sharma',
    date: '2025-06-28',
    description: 'Additional electrical conduit requested.',
    status: 'Approved',
  },
  {
    requestId: 'CR-003',
    projectId: 'PRJ-003',
    raisedBy: 'JE Anil Mehta',
    date: '2025-07-05',
    description: 'Material change: use TMT bars instead of standard steel.',
    status: 'Rejected',
  },
];

const rows = rawRows.map((row, index) => ({
  id: index + 1,
  sno: index + 1,
  ...row,
}));

const columns = [
  { field: 'sno', headerName: 'S.No', flex: 0.5, sortable: false },
  { field: 'requestId', headerName: 'Request ID', flex: 1 },
  { field: 'projectId', headerName: 'Project ID', flex: 1 },
  { field: 'raisedBy', headerName: 'Raised By (JE/XEN)', flex: 1.5 },
  { field: 'date', headerName: 'Date', flex: 1 },
  { field: 'description', headerName: 'Request Description', flex: 2 },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1.2,
    renderCell: () => (
      <FormControlLabel
        control={<Switch color="primary" defaultChecked />}
        label="Approved"
      />
    ),
  },
];

const ChangeRequestMain = () => {
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
          Change Requests
        </Typography>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          placeholder="Search by ID or Project"
          sx={{ minWidth: 250 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* DataGrid Table */}
      <Box width="100%">
        <StyledDataGrid rows={rows} columns={columns} />
      </Box>
    </Box>
  );
};

export default ChangeRequestMain;
