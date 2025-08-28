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
import StyledDataGrid from '@/components/StyledDataGrid';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const rawRows = [
  {
    openingId: 'OPN-001',
    tenderId: 'TND-001',
    openedBy: 'XEN A',
    technicalBidDate: '2025-07-10 10:00 AM',
    financialBidDate: '2025-07-12 02:00 PM',
    qualifiedBidders: 'Bidder A, Bidder B',
    comparativeFile: 'statement1.pdf',
    status: 'Pending',
  },
  {
    openingId: 'OPN-002',
    tenderId: 'TND-002',
    openedBy: 'XEN B',
    technicalBidDate: '2025-07-05 11:30 AM',
    financialBidDate: '2025-07-08 01:00 PM',
    qualifiedBidders: 'Bidder C',
    comparativeFile: 'statement2.pdf',
    status: 'Completed',
  },
  {
    openingId: 'OPN-003',
    tenderId: 'TND-003',
    openedBy: 'XEN C',
    technicalBidDate: '2025-07-01 09:00 AM',
    financialBidDate: '2025-07-04 12:00 PM',
    qualifiedBidders: 'Bidder D, Bidder E',
    comparativeFile: '',
    status: 'Pending',
  },
];

const rows = rawRows.map((row, index) => ({
  id: index + 1,
  sno: index + 1,
  ...row,
}));

const columns = [
  { field: 'sno', headerName: 'S.No', flex: 0.5 },
  { field: 'openingId', headerName: 'Opening ID', flex: 1 },
  { field: 'tenderId', headerName: 'Tender ID', flex: 1 },
  { field: 'openedBy', headerName: 'Opened By (XEN)', flex: 1 },
  { field: 'technicalBidDate', headerName: 'Technical Bid Date', flex: 1 },
  { field: 'financialBidDate', headerName: 'Financial Bid Date', flex: 1 },
  {
    field: 'qualifiedBidders',
    headerName: 'Qualified Bidders (Tech)',
    flex: 1.5,
  },
  {
    field: 'comparativeFile',
    headerName: 'L1/L2/L3 Statement',
    flex: 1.5,
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1,
    renderCell: ({ value }) => {
      if (value === 'Completed') {
        return <Chip label="Completed" color="success" />;
      }

      if (value === 'Rejected') {
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

const TenderOpeningMain = () => {
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
          Tender Opening
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
          <Link to="/tender-opening/create">
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

export default TenderOpeningMain;
