import React from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Paper,
} from '@mui/material';
// import { CloudUpload } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const BudgetControlAdd = () => {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h4" component="h1" fontWeight={600} gutterBottom>
        Create Budget Entry
      </Typography>

      <Box component="form" sx={{ mt: 3 }}>
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            label="Budget ID"
            name="budgetId"
            fullWidth
            required
            color="primary"
          />
          <TextField
            label="Project ID"
            name="projectId"
            fullWidth
            required
            color="primary"
          />
        </Box>

        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            label="WBS Code"
            name="wbsCode"
            fullWidth
            required
            color="primary"
          />
          <TextField
            label="Total Budget (₹)"
            name="totalBudget"
            type="number"
            fullWidth
            required
            color="primary"
          />
        </Box>

        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            label="Utilized Amount (₹)"
            name="utilizedAmount"
            type="number"
            fullWidth
            color="primary"
          />
          <TextField
            label="Utilized (%)"
            name="utilizedPercent"
            type="number"
            fullWidth
            color="primary"
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <FormControl fullWidth>
            <InputLabel id="alert-status-label">Alert Status</InputLabel>
            <Select
              labelId="alert-status-label"
              name="alertStatus"
              label="Alert Status"
              defaultValue=""
              color="primary"
            >
              <MenuItem value="None">None</MenuItem>
              <MenuItem value="Near Limit">Near Limit</MenuItem>
              <MenuItem value="Exceeded">Exceeded</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}
        >
          <Link to="/budget-control" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" color="secondary" size="large">
              Cancel
            </Button>
          </Link>

          <Button variant="contained" color="primary" size="large">
            Create Budget
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default BudgetControlAdd;
