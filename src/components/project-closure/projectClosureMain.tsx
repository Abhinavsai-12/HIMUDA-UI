import React from 'react';
import {
  Box,
  TextField,
  Typography,
  Switch,
  FormControlLabel,
  InputAdornment,
} from '@mui/material';

import StyledDataGrid from '@/components/StyledDataGrid';
import SearchIcon from '@mui/icons-material/Search';

const rawRows = [
  {
    closureId: 'CLS-001',
    projectId: 'PRJ-001',
    closedBy: 'XEN Sharma',
    closureDate: '2025-07-01',
    finalReport: 'report_bridge_closure.pdf',
    remarks: 'Bridge completed and handed over to local authority.',
    handoverStatus: 'Completed',
  },
  {
    closureId: 'CLS-002',
    projectId: 'PRJ-002',
    closedBy: 'XEN Verma',
    closureDate: '2025-06-25',
    finalReport: 'tank_closure.pdf',
    remarks: 'Water tank installation completed with minor punch items.',
    handoverStatus: 'Pending',
  },
  {
    closureId: 'CLS-003',
    projectId: 'PRJ-003',
    closedBy: 'XEN Rakesh',
    closureDate: '2025-07-08',
    finalReport: 'housing_block_a_report.pdf',
    remarks: 'All finishing done. Keys handed over to residents.',
    handoverStatus: 'Completed',
  },
];

const rows = rawRows.map((row, index) => ({
  id: index + 1,
  sno: index + 1,
  ...row,
}));

const columns = [
  { field: 'sno', headerName: 'S.No', flex: 0.5, sortable: false },
  { field: 'closureId', headerName: 'Closure ID', flex: 1 },
  { field: 'projectId', headerName: 'Project ID', flex: 1 },
  { field: 'closedBy', headerName: 'Closed By (XEN)', flex: 1.5 },
  { field: 'closureDate', headerName: 'Closure Date', flex: 1 },
  { field: 'finalReport', headerName: 'Final Report', flex: 1.5 },
  { field: 'remarks', headerName: 'Remarks / Observations', flex: 2 },
  {
    field: 'handoverStatus',
    headerName: 'Handover Status',
    flex: 1.5,
    renderCell: () => (
      <FormControlLabel
        control={<Switch color="primary" defaultChecked />}
        label="Completed"
      />
    ),
  },
];

const projectClosureMain = () => {
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
          Project Closure
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

export default projectClosureMain;
