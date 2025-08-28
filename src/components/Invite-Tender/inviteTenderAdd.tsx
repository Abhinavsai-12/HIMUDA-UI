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

const InviteTenderAdd = () => {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h4" component="h1" fontWeight={600} gutterBottom>
        Invite New Tender
      </Typography>

      <Box component="form" sx={{ mt: 3 }}>
        {/* Row 1: Tender ID and Project ID */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            label="Tender ID"
            name="tenderId"
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

        {/* Row 2: Issued By and Title */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            label="Issued By (XEN)"
            name="issuedBy"
            fullWidth
            required
            color="primary"
          />
          <TextField
            label="Title"
            name="tenderTitle"
            fullWidth
            required
            color="primary"
          />
        </Box>

        {/* Row 3: Tender Details */}
        <Box sx={{ mb: 3 }}>
          <TextField
            label="Scope of Work"
            name="tenderDetails"
            multiline
            rows={4}
            fullWidth
            required
            color="primary"
          />
        </Box>

        {/* Row 4: Document Upload */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body1" fontWeight={500} gutterBottom>
            Tender Document (PDF) *
          </Typography>
          <FileUploadBox>
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUpload />}
              color="primary"
              sx={{ mb: 1 }}
            >
              Upload Tender Document
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
              <MenuItem value="Open">Open</MenuItem>
              <MenuItem value="Closed">Closed</MenuItem>
              <MenuItem value="Cancelled">Cancelled</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Row 6: Action Buttons */}
        <Box
          sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}
        >
          <Link to="/invite-tender" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" color="secondary" size="large">
              Cancel
            </Button>
          </Link>
          <Button variant="contained" color="primary" size="large">
            Create Tender
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default InviteTenderAdd;
