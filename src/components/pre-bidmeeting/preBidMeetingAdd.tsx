import React from 'react';
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
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

const PreBidMeetingAdd = () => {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h4" component="h1" fontWeight={600} gutterBottom>
        Add Pre-Bid Meeting
      </Typography>

      <Box component="form" sx={{ mt: 3 }}>
        {/* Row 1: Project Name + Meeting Date */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            label="Project Name"
            name="projectName"
            fullWidth
            required
            color="primary"
          />
          <TextField
            label="Meeting Date"
            name="meetingDate"
            type="date"
            fullWidth
            required
            InputLabelProps={{ shrink: true }}
            color="primary"
          />
        </Box>

        {/* Row 2: Location + Conducted By */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            label="Location"
            name="location"
            fullWidth
            required
            color="primary"
          />
          <TextField
            label="Conducted By"
            name="conductedBy"
            fullWidth
            required
            color="primary"
          />
        </Box>

        {/* Row 3: Upload Minutes */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body1" fontWeight={500} gutterBottom>
            Upload Minutes of Meeting *
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

        {/* Row 4: Action Buttons */}
        <Box
          sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}
        >
          <Link to="/pre-bid-meeting" style={{ textDecoration: 'none' }}>
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

export default PreBidMeetingAdd;
