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

const EstimateAdd = () => {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Create New Estimate
      </Typography>

      <Box component="form" sx={{ mt: 3 }}>
        {/* Row 1: Estimate Title and Estimate Type */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            label="Estimate Title"
            name="estimateTitle"
            fullWidth
            required
            color="primary"
          />
          <FormControl fullWidth required>
            <InputLabel id="estimate-type-label">Estimate Type</InputLabel>
            <Select
              labelId="estimate-type-label"
              name="estimateType"
              label="Estimate Type"
              defaultValue=""
              color="primary"
            >
              <MenuItem value="Construction">Construction</MenuItem>
              <MenuItem value="Electrical">Electrical</MenuItem>
              <MenuItem value="Plumbing">Plumbing</MenuItem>
              <MenuItem value="Maintenance">Maintenance</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ mb: 3 }}>
          <TextField
            label="Estimated Amount (INR)"
            name="amount"
            type="number"
            fullWidth
            required
            color="primary"
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <TextField
            label="Description"
            name="description"
            multiline
            rows={4}
            fullWidth
            required
            color="primary"
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="body1" fontWeight={500} gutterBottom>
            Upload Estimate Document *
          </Typography>
          <FileUploadBox>
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUpload />}
              color="primary"
              sx={{ mb: 1 }}
            >
              Upload Document
              <VisuallyHiddenInput type="file" accept=".pdf,.doc,.docx" />
            </Button>
            <Typography variant="caption" display="block" color="secondary">
              Accepted formats: PDF, DOC, DOCX
            </Typography>
          </FileUploadBox>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}>
          <Link to="/estimates-proposal" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" color="secondary" size="large">
              Cancel
            </Button>
          </Link>
          <Button variant="contained" color="primary" size="large">
            Submit Estimate
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default EstimateAdd;
