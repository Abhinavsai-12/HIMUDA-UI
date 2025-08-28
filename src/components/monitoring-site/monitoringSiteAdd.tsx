import React from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  styled,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const FileUploadBox = styled(Box)(({ theme }) => ({
  border: `2px dashed ${theme.palette.grey[300]}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  textAlign: 'center',
  backgroundColor: '#f9fafb',
  transition: 'border-color 0.3s ease',
  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
}));

const MonitoringSiteAdd = () => {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h4" component="h1" fontWeight={600} gutterBottom>
        Add Site Visit Record
      </Typography>

      <Box component="form" sx={{ mt: 3 }}>
        {/* Row 1: Visit ID and Project ID */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            label="Visit ID"
            name="visitId"
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

        {/* Row 2: Site Name and Visited By */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            label="Site"
            name="siteName"
            fullWidth
            required
            color="primary"
          />
          <TextField
            label="Visited By (JE/XEN)"
            name="visitedBy"
            fullWidth
            required
            color="primary"
          />
        </Box>

        {/* Row 3: Visit Date */}
        <Box sx={{ mb: 3 }}>
          <TextField
            label="Visit Date"
            name="visitDate"
            type="date"
            fullWidth
            required
            color="primary"
            InputLabelProps={{ shrink: true }}
          />
        </Box>

        {/* Row 4: File Upload */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body1" fontWeight={500} gutterBottom>
            Upload Site Photos
          </Typography>
          <FileUploadBox>
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUpload />}
              color="primary"
              sx={{ mb: 1 }}
            >
              Upload Images
              <VisuallyHiddenInput type="file" accept="image/*" multiple />
            </Button>
            <Typography variant="caption" display="block" color="secondary">
              Accepted formats: JPG, PNG (Multiple images allowed)
            </Typography>
          </FileUploadBox>
        </Box>

        {/* Row 5: Observation Notes */}
        <Box sx={{ mb: 3 }}>
          <TextField
            label="Observation Notes"
            name="notes"
            multiline
            rows={4}
            fullWidth
            color="primary"
          />
        </Box>

        {/* Row 6: Defects Found */}
        <Box sx={{ mb: 3 }}>
          <FormControlLabel
            control={<Checkbox name="defectsFound" color="primary" />}
            label="Defects Found"
          />
        </Box>

        {/* Row 7: Action Buttons */}
        <Box
          sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}
        >
          <Link to="/monitoring-site-visits" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" color="secondary" size="large">
              Cancel
            </Button>
          </Link>
          <Button variant="contained" color="primary" size="large">
            Submit Visit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default MonitoringSiteAdd;
