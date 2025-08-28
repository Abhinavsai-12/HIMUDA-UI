import React from 'react';
import {
  Box,
  TextField,
  Typography,
  FormControlLabel,
  Switch,
  InputAdornment,
} from '@mui/material';

import StyledDataGrid from '@/components/StyledDataGrid';
import SearchIcon from '@mui/icons-material/Search';

const rawRows = [
  {
    billId: 'BILL-001',
    projectId: 'PRJ-001',
    preparedBy: 'JE Arjun Rao',
    verifiedBy: 'XEN S. Mehta',
    amount: 1450000,
    status: 'Initiated',
    measurementBook: 'mb_prj001.pdf',
  },
  {
    billId: 'BILL-002',
    projectId: 'PRJ-002',
    preparedBy: 'JE Nisha Patel',
    verifiedBy: 'XEN A. Gupta',
    amount: 980000,
    status: 'Approved',
    measurementBook: 'mb_prj002.pdf',
  },
  {
    billId: 'BILL-003',
    projectId: 'PRJ-003',
    preparedBy: 'JE Ravi Das',
    verifiedBy: 'XEN P. Sen',
    amount: 1725000,
    status: 'Paid',
    measurementBook: 'mb_prj003.pdf',
  },
];

const rows = rawRows.map((row, index) => ({
  id: index + 1,
  sno: index + 1,
  ...row,
}));

const columns = [
  { field: 'sno', headerName: 'S.No', flex: 0.5, sortable: false },
  { field: 'billId', headerName: 'Bill ID', flex: 1 },
  { field: 'projectId', headerName: 'Project ID', flex: 1 },
  { field: 'preparedBy', headerName: 'Prepared By (JE)', flex: 1.5 },
  { field: 'verifiedBy', headerName: 'Verified By (XEN)', flex: 1.5 },
  { field: 'amount', headerName: 'Amount (₹)', flex: 1 },
  { field: 'measurementBook', headerName: 'e-MB File', flex: 1.5 },

  {
    field: 'status',
    headerName: 'Status',
    flex: 1.2,
    renderCell: () => (
      <FormControlLabel control={<Switch color="primary" />} label="Approved" />
    ),
  },
];

const paymentRunningMain = () => {
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
          Payments & Running Bills
        </Typography>
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
      </Box>
      <Box width="100%">
        <StyledDataGrid rows={rows} columns={columns} />
      </Box>
    </Box>
  );
};

export default paymentRunningMain;
