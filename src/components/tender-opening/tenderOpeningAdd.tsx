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

// Styled components
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

const TenderOpeningAdd = () => {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h4" component="h1" fontWeight={600} gutterBottom>
        Tender Opening
      </Typography>

      <Box component="form" sx={{ mt: 3 }}>
        {/* Row 1: Opening ID and Tender ID */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            label="Opening ID"
            name="openingId"
            fullWidth
            required
            color="primary"
          />
          <TextField
            label="Tender ID"
            name="tenderId"
            fullWidth
            required
            color="primary"
          />
        </Box>

        {/* Row 2: Opened By and Technical Bid Date */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            label="Opened By (XEN)"
            name="openedBy"
            fullWidth
            required
            color="primary"
          />
          <TextField
            label="Technical Bid Date"
            name="technicalBidDate"
            type="datetime-local"
            fullWidth
            required
            color="primary"
            InputLabelProps={{ shrink: true }}
          />
        </Box>

        {/* Row 3: Financial Bid Date and Qualified Bidders */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            label="Financial Bid Date"
            name="financialBidDate"
            type="datetime-local"
            fullWidth
            required
            color="primary"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Qualified Bidders (comma separated)"
            name="qualifiedBidders"
            fullWidth
            required
            color="primary"
          />
        </Box>

        {/* Row 4: L1/L2/L3 Statement Upload */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body1" fontWeight={500} gutterBottom>
            L1/L2/L3 Statement *
          </Typography>
          <FileUploadBox>
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUpload />}
              color="primary"
              sx={{ mb: 1 }}
            >
              Upload File
              <VisuallyHiddenInput type="file" accept=".pdf,.doc,.docx" />
            </Button>
            <Typography variant="caption" display="block" color="secondary">
              Accepted formats: PDF, DOC, DOCX
            </Typography>
          </FileUploadBox>
        </Box>

        {/* Row 5: Status */}
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
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Row 6: Action Buttons */}
        <Box
          sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}
        >
          <Link to="/tender-opening" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" color="secondary" size="large">
              Cancel
            </Button>
          </Link>
          <Button variant="contained" color="primary" size="large">
            Create Opening
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default TenderOpeningAdd;
