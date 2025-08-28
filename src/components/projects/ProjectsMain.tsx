import React from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  IconButton,
  InputAdornment,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StyledDataGrid from '@/components/StyledDataGrid';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const rows = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description for Project 1.',
    initiatedBy: 'CEO',
    scopeUpload: 'project1_scope.pdf',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description for Project 2.',
    initiatedBy: 'Minister',
    scopeUpload: 'project2_scope.docx',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description for Project 3.',
    initiatedBy: 'CEO',
    scopeUpload: 'project3_scope.pdf',
  },
];

const columns = [
  { field: 'id', headerName: 'ID', flex: 0.5, sortable: false },
  { field: 'title', headerName: 'Project Title', flex: 1 },
  { field: 'description', headerName: 'Description', flex: 2 },
  { field: 'initiatedBy', headerName: 'Initiated By', flex: 1 },
  { field: 'scopeUpload', headerName: 'Scope Upload', flex: 1 },
  {
    field: 'actions',
    headerName: 'Actions',
    flex: 1,
    sortable: false,
    renderCell: (params: any) => (
      <Stack direction="row" spacing={1}>
        <IconButton
          color="info"
          size="small"
          onClick={() => console.log('View', params.row)}
        >
          <VisibilityIcon />
        </IconButton>
        <IconButton
          color="primary"
          size="small"
          onClick={() => console.log('Edit', params.row)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          color="error"
          size="small"
          onClick={() => console.log('Delete', params.row)}
        >
          <DeleteIcon />
        </IconButton>
      </Stack>
    ),
  },
];

const ProjectsPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        ml: {
          xs: 0,
          sm: 4,
          md: 8,
        },
        mr: {
          xs: 0,
          sm: 2,
        },
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        gap={2}
      >
        <Typography variant="h4" fontWeight="bold">
          Projects
        </Typography>

        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            placeholder="Search..."
            sx={{ minWidth: 200 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
          <Link to="/projects/create">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </Stack>
      </Box>

      {/* DataGrid */}
      <Box width="100%">
        <StyledDataGrid rows={rows} columns={columns} />
      </Box>
    </Box>
  );
};

export default ProjectsPage;
