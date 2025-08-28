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
import SearchIcon from '@mui/icons-material/Search';
import StyledDataGrid from '@/components/StyledDataGrid';
import { GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

const rows = [
  {
    id: 1,
    budgetId: '1',
    projectId: '1',
    wbsCode: '1',
    totalBudget: 1000000,
    utilizedAmount: 750000,
    utilizedPercent: 7,
    alertStatus: 'Near Limit',
  },
  {
    id: 2,
    budgetId: '2',
    projectId: '2',
    wbsCode: '2',
    totalBudget: 500000,
    utilizedAmount: 500000,
    utilizedPercent: 10,
    alertStatus: 'Exceeded',
  },
  {
    id: 3,
    budgetId: '3',
    projectId: '3',
    wbsCode: '3',
    totalBudget: 800000,
    utilizedAmount: 200000,
    utilizedPercent: 2,
    alertStatus: 'None',
  },
];

const columns: GridColDef[] = [
  { field: 'budgetId', headerName: 'Budget ID', flex: 0.5 },
  { field: 'projectId', headerName: 'Project ID', flex: 1 },
  { field: 'wbsCode', headerName: 'WBS Code', flex: 1 },
  {
    field: 'totalBudget',
    headerName: 'Total Budget (₹)',
    flex: 1,
    type: 'number',
  },
  {
    field: 'utilizedAmount',
    headerName: 'Utilized (₹)',
    flex: 1,
    type: 'number',
  },
  {
    field: 'utilizedPercent',
    headerName: 'Utilized (%)',
    flex: 1,
    type: 'number',
  },
  {
    field: 'alertStatus',
    headerName: 'Alert',
    type: 'string',
    flex: 1,
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

const BudgetControlMain = () => {
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
          Budget Control
        </Typography>

        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
          <TextField
            label="Search Budget"
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
          <Link to="/budget-control/create">
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

export default BudgetControlMain;
