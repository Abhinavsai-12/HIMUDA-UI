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
import { Link } from 'react-router-dom';

const DefectManagementAdd = () => {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h4" component="h1" fontWeight={600} gutterBottom>
        Report New Defect
      </Typography>

      <Box component="form" sx={{ mt: 3 }}>
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            label="Defect ID"
            name="defectId"
            fullWidth
            required
            color="primary"
          />
          <TextField
            label="Project ID"
            name="projectId"
            fullWidth
            color="primary"
          />
        </Box>

        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            label="Location"
            name="location"
            fullWidth
            required
            color="primary"
          />
          <TextField
            label="Reported By"
            name="reportedBy"
            fullWidth
            required
            color="primary"
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <FormControl fullWidth>
            <InputLabel id="severity-label">Severity</InputLabel>
            <Select
              labelId="severity-label"
              name="severity"
              label="Severity"
              defaultValue=""
              required
              color="primary"
            >
              <MenuItem value="Low">Low</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="High">High</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            label="Defect Details"
            name="description"
            multiline
            minRows={3}
            fullWidth
            color="primary"
          />
          <TextField
            label="Corrective Action Taken"
            name="correctiveAction"
            multiline
            minRows={3}
            fullWidth
            color="primary"
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <FormControl fullWidth>
            <InputLabel id="status-label">Resolved</InputLabel>
            <Select
              labelId="status-label"
              name="status"
              label="Resolved"
              defaultValue=""
              color="primary"
            >
              <MenuItem value="true">Yes</MenuItem>
              <MenuItem value="false">No</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}
        >
          <Link to="/defect-management" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" color="secondary" size="large">
              Cancel
            </Button>
          </Link>

          <Button variant="contained" color="primary" size="large">
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default DefectManagementAdd;
