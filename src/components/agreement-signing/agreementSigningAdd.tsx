import React from 'react';
import {
  Box,
  Button,
  FormControl,
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

const AgreementSigningAdd = () => {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h4" component="h1" fontWeight={600} gutterBottom>
        Agreement Signing
      </Typography>

      <Box component="form" sx={{ mt: 3 }}>
        {/* Row 1: Agreement ID and Tender ID */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            label="Agreement ID"
            name="agreementId"
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

        {/* Row 2: Project ID and Signed By */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            label="Project ID"
            name="projectId"
            fullWidth
            color="primary"
          />
          <TextField
            label="Signed By (XEN)"
            name="signedBy"
            fullWidth
            required
            color="primary"
          />
        </Box>

        {/* Row 3: L1 Bidder and Signed Date */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            label="L1 Bidder"
            name="vendorName"
            fullWidth
            required
            color="primary"
          />
          <TextField
            label="Signed Date"
            name="signedDate"
            type="date"
            fullWidth
            required
            color="primary"
            InputLabelProps={{ shrink: true }}
          />
        </Box>

        {/* Row 4: Agreement File Upload */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body1" fontWeight={500} gutterBottom>
            Digital Copy (PDF) *
          </Typography>
          <FileUploadBox>
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUpload />}
              color="primary"
              sx={{ mb: 1 }}
            >
              Upload Agreement File
              <VisuallyHiddenInput type="file" accept=".pdf,.doc,.docx" />
            </Button>
            <Typography variant="caption" display="block" color="secondary">
              Accepted formats: PDF, DOC, DOCX
            </Typography>
          </FileUploadBox>
        </Box>

        {/* Row 5: Action Buttons */}
        <Box
          sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}
        >
          <Link to="/agreement-signing" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" color="secondary" size="large">
              Cancel
            </Button>
          </Link>
          <Button variant="contained" color="primary" size="large">
            Create Agreement
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default AgreementSigningAdd;
