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

const ProjectsAdd = () => {
  return (
    <>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" fontWeight={600} gutterBottom>
          Create New Project
        </Typography>

        <Box component="form" sx={{ mt: 3 }}>
          {/* Row 1: Project Title and Initiated By */}
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <TextField
              label="Project Title"
              name="title"
              fullWidth
              required
              color="primary"
            />
            <FormControl fullWidth required>
              <InputLabel id="initiated-by-label">Initiated By</InputLabel>
              <Select
                labelId="initiated-by-label"
                name="initiatedBy"
                label="Initiated By"
                color="primary"
                defaultValue=""
              >
                <MenuItem value="CEO">CEO</MenuItem>
                <MenuItem value="Minister">Minister</MenuItem>
                <MenuItem value="Director">Director</MenuItem>
                <MenuItem value="Manager">Manager</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Row 2: Description */}
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

          {/* Row 3: Scope Upload */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" fontWeight={500} gutterBottom>
              Scope Upload *
            </Typography>
            <FileUploadBox>
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUpload />}
                color="primary"
                sx={{ mb: 1 }}
              >
                Upload Scope Document
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
            <Link to="/projects" style={{ textDecoration: 'none' }}>
              <Button variant="outlined" color="secondary" size="large">
                Cancel
              </Button>
            </Link>

            <Button variant="contained" color="primary" size="large">
              Create Project
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default ProjectsAdd;
