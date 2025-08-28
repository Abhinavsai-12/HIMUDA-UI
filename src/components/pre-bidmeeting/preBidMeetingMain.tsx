import React from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  Avatar,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StyledDataGrid from '@/components/StyledDataGrid';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

const rows = [
  {
    id: 1,
    projectName: 'Urban Infrastructure Upgrade',
    meetingDate: '2025-08-01',
    location: 'Virtual Meeting - Zoom',
    conductedBy: 'Amit Sharma',
    minutesFile: 'urban_infra_minutes.pdf',
  },
  {
    id: 2,
    projectName: 'Water Supply Pipeline Installation',
    meetingDate: '2025-08-05',
    location: 'City Hall, Conference Room 2B',
    conductedBy: 'Neha Verma',
    minutesFile: 'water_pipeline_minutes.docx',
  },
  {
    id: 3,
    projectName: 'School Renovation Program',
    meetingDate: '2025-08-10',
    location: 'Education Board Office',
    conductedBy: 'Ravi Kumar',
    minutesFile: 'school_renovation_minutes.pdf',
  },
  {
    id: 4,
    projectName: 'Solar Street Lighting Initiative',
    meetingDate: '2025-08-15',
    location: 'Green Energy Dept.',
    conductedBy: 'Sunita Singh',
    minutesFile: 'solar_lighting_minutes.pdf',
  },
  {
    id: 5,
    projectName: 'Rural Road Connectivity Phase II',
    meetingDate: '2025-08-20',
    location: 'District Collectorate',
    conductedBy: 'Prakash Mehra',
    minutesFile: 'rural_roads_minutes.docx',
  },
  {
    id: 6,
    projectName: 'Drainage and Sewage Modernization',
    meetingDate: '2025-08-25',
    location: 'Public Works Dept.',
    conductedBy: 'Anjali Rao',
    minutesFile: 'drainage_minutes.pdf',
  },
];

const columns = [
  { field: 'id', headerName: 'ID', flex: 0.4 },
  { field: 'projectName', headerName: 'Project Name', flex: 1 },
  { field: 'meetingDate', headerName: 'Meeting Date', flex: 1 },
  { field: 'location', headerName: 'Location', flex: 1 },
  {
    field: 'conductedBy',
    headerName: 'Conducted By',
    flex: 1,
    renderCell: ({ row }) => {
      const name = row.conductedBy;

      return (
        <Stack direction="row" alignItems="center" spacing={1}>
          <Avatar sx={{ width: 30, height: 30 }}>
            <PersonIcon fontSize="small" />
          </Avatar>
          <Typography variant="body2">{name}</Typography>
        </Stack>
      );
    },
  },

  { field: 'minutesFile', headerName: 'Minutes File', flex: 1 },
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

export default function PreBidMeeting() {
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
          Pre-Bid Meetings
        </Typography>

        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
          <TextField
            label="Search..."
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
          <Link to="/pre-bid-meeting/create">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </Stack>
      </Box>

      {/* DataGrid */}
      <Box width="100%" mt={2}>
        <StyledDataGrid rows={rows} columns={columns} />
      </Box>
    </Box>
  );
}
