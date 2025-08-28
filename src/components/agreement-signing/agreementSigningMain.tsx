import React from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  IconButton,
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
    agreementId: 'AGR-001',
    tenderId: 'TND-001',
    projectId: 'PRJ-001',
    signedBy: 'XEN A',
    vendorName: 'Vendor A',
    signedDate: '2025-07-01',
    agreementFile: 'agreement_A.pdf',
  },
  {
    agreementId: 'AGR-002',
    tenderId: 'TND-002',
    projectId: 'PRJ-002',
    signedBy: 'XEN B',
    vendorName: 'Vendor B',
    signedDate: '2025-07-05',
    agreementFile: 'agreement_B.pdf',
  },
  {
    agreementId: 'AGR-003',
    tenderId: 'TND-003',
    projectId: 'PRJ-003',
    signedBy: 'XEN C',
    vendorName: 'Vendor C',
    signedDate: '2025-07-10',
    agreementFile: '',
  },
];

const rows = rawRows.map((row, index) => ({
  id: index + 1,
  sno: index + 1,
  ...row,
}));

const columns = [
  { field: 'sno', headerName: 'S.No', flex: 0.5 },
  { field: 'agreementId', headerName: 'Agreement ID', flex: 1 },
  { field: 'tenderId', headerName: 'Tender ID', flex: 1 },
  { field: 'projectId', headerName: 'Project ID', flex: 1 },
  { field: 'signedBy', headerName: 'Signed By (XEN)', flex: 1 },
  { field: 'vendorName', headerName: 'L1 Bidder', flex: 1 },
  { field: 'signedDate', headerName: 'Signed Date', flex: 1 },
  { field: 'agreementFile', headerName: 'Digital Copy (PDF)', flex: 1.5 },
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

const AgreementSigningMain = () => {
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
          Agreement Signing
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
          <Link to="/agreement-signing/create">
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

export default AgreementSigningMain;
