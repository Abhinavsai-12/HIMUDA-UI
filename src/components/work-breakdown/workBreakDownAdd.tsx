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
  styled,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { Link } from 'react-router-dom';

const workBreakDownAdd = () => {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h4" component="h1" fontWeight={600} gutterBottom>
        Add Work Breakdown Task
      </Typography>

      <Box component="form" sx={{ mt: 3 }}>
        {/* Row 1: WBS ID and Project ID */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            label="WBS ID"
            name="wbsId"
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

        {/* Row 2: Task Name and Created By */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            label="Task Name"
            name="taskName"
            fullWidth
            required
            color="primary"
          />
          <TextField
            label="Created By (XEN)"
            name="createdBy"
            fullWidth
            required
            color="primary"
          />
        </Box>

        {/* Row 3: Status */}
        <Box sx={{ mb: 3 }}>
          <FormControl fullWidth required>
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              name="status"
              label="Status"
              defaultValue=""
              color="primary"
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Locked">Locked</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Row 4: Defects Linked */}
        <Box sx={{ mb: 3 }}>
          <FormControlLabel
            control={<Checkbox name="defectsLinked" color="primary" />}
            label="Defects Linked"
          />
        </Box>

        {/* Row 5: Action Buttons */}
        <Box
          sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}
        >
          <Link to="/work-break-down" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" color="secondary" size="large">
              Cancel
            </Button>
          </Link>
          <Button variant="contained" color="primary" size="large">
            Create Task
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default workBreakDownAdd;
