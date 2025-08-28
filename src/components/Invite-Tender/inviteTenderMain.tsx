import React from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  Chip,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StyledDataGrid from '@/components/StyledDataGrid';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

const rawRows = [
  {
    tenderId: 'TND-001',
    projectId: 'PRJ-001',
    issuedBy: 'XEN 1',
    tenderTitle: 'Title 1',
    tenderDetails: 'Details 1',
    documentLink: 'document1.pdf',
    status: 'Open',
  },
  {
    tenderId: 'TND-002',
    projectId: 'PRJ-002',
    issuedBy: 'XEN 2',
    tenderTitle: 'Title 2',
    tenderDetails: 'Details 2',
    documentLink: 'document2.pdf',
    status: 'Closed',
  },
  {
    tenderId: 'TND-003',
    projectId: 'PRJ-003',
    issuedBy: 'XEN 3',
    tenderTitle: 'Title 3',
    tenderDetails: 'Details 3',
    documentLink: 'document3.pdf',
    status: 'Cancelled',
  },
];

const rows = rawRows.map((row, index) => ({
  id: index + 1,
  sno: index + 1,
  ...row,
}));

const columns = [
  { field: 'sno', headerName: 'S.No', flex: 0.5, sortable: false },
  { field: 'tenderId', headerName: 'Tender ID', flex: 1 },
  { field: 'projectId', headerName: 'Project ID', flex: 1 },
  { field: 'issuedBy', headerName: 'Issued By (XEN)', flex: 1 },
  { field: 'tenderTitle', headerName: 'Title', flex: 1 },
  { field: 'tenderDetails', headerName: 'Scope of Work', flex: 1 },
  { field: 'documentLink', headerName: 'Tender Document (PDF)', flex: 1 },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1,
    renderCell: ({ row }) => {
      const status = row.status;

      if (status === 'Open') {
        return <Chip label="Open" color="success" variant="outlined" />;
      }

      if (status === 'Closed') {
        return <Chip label="Closed" color="error" variant="outlined" />;
      }

      return (
        <Chip
          label={status}
          variant="outlined"
          sx={{
            color: '#FBC02D',
            fontWeight: 500,
            borderColor: '#FBC02D',
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

const InviteTenderMain = () => {
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
          Invite Tender
        </Typography>

        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
          <TextField
            label="Search..."
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

          <Link to="/invite-tender/create">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </Stack>
      </Box>

      {/* DataGrid */}
      <Box width="100%">
        <StyledDataGrid rows={rows} columns={columns} />
      </Box>
    </Box>
  );
};

export default InviteTenderMain;
