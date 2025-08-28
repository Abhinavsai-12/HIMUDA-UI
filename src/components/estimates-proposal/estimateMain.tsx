import React from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  IconButton,
  Chip,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StyledDataGrid from '@/components/StyledDataGrid';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

const rows = [
  {
    id: 1,
    estimateId: '1',
    projectId: '1',
    estimatedBy: 'Person 1',
    validatedBy: 'Person 2',
    approvedBy: 'Person 3',
    estimateAmount: 0,
    estimateFile: 'file1',
    approvalStatus: 'Pending',
    remarks: '-',
  },
  {
    id: 2,
    estimateId: '2',
    projectId: '2',
    estimatedBy: 'Person 4',
    validatedBy: 'Person 5',
    approvedBy: 'Person 6',
    estimateAmount: 0,
    estimateFile: 'file2',
    approvalStatus: 'Approved',
    remarks: '- ',
  },
  {
    id: 3,
    estimateId: '3',
    projectId: '3',
    estimatedBy: 'Person 7',
    validatedBy: 'Person 8',
    approvedBy: 'Person 9',
    estimateAmount: 0,
    estimateFile: 'file3',
    approvalStatus: 'Rejected',
    remarks: '- ',
  },
  {
    id: 4,
    estimateId: '4',
    projectId: '4',
    estimatedBy: 'Person 10',
    validatedBy: 'Person 11',
    approvedBy: 'Person 12',
    estimateAmount: 0,
    estimateFile: 'file4',
    approvalStatus: 'Pending',
    remarks: '-',
  },
];

const columns = [
  { field: 'estimateId', headerName: 'Estimate ID', flex: 0.8 },
  { field: 'projectId', headerName: 'Project ID', flex: 0.8 },
  { field: 'estimatedBy', headerName: 'Prepared By (JE)', flex: 1 },
  { field: 'validatedBy', headerName: 'Validated By (SDO)', flex: 1 },
  { field: 'approvedBy', headerName: 'Finalized By (XEN/SE/CE)', flex: 1 },
  { field: 'estimateAmount', headerName: 'Amount (₹)', flex: 1 },
  { field: 'estimateFile', headerName: 'Document File (PDF)', flex: 1 },
  {
    field: 'approvalStatus',
    headerName: 'Status',
    flex: 1,
    renderCell: ({ row }) => {
      const status = row.approvalStatus;

      if (status === 'Approved') {
        return <Chip label="Approved" color="success" />;
      }

      if (status === 'Rejected') {
        return <Chip label="Rejected" color="error" />;
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

  // { field: 'remarks', headerName: 'Remarks', flex: 2 },
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

const EstimatesPage = () => {
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
          Estimates & Proposal Approval
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
          <Link to="/estimates-proposal/create">
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

export default EstimatesPage;
