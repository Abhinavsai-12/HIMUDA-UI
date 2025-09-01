import React from 'react';
import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
  Collapse,
  IconButton,
} from '@mui/material';
import {
  Dashboard,
  Inventory,
  Work,
  Build,
  Gavel,
  Description,
  People,
  CloudUpload,
  Assessment,
  ExpandLess,
  ExpandMore,
  Settings,
  Menu,
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 280;

const SideBar: React.FC = () => {
  const location = useLocation();
  const [openCosting, setOpenCosting] = React.useState(true);
  const [openProjects, setOpenProjects] = React.useState(true);
  const [openUtilities, setOpenUtilities] = React.useState(true);
  const [openReports, setOpenReports] = React.useState(true);
  const [openDrawer, setOpenDrawer] = React.useState(true);

  const isActive = (path: string) => location.pathname === path;

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        '& .MuiDrawer-paper': {
          width: openDrawer ? drawerWidth : 64,
          boxSizing: 'border-box',
          bgcolor: '#082b48',
          color: '#fff',
          overflowX: 'hidden',
          transition: (theme) =>
            theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
        },
      }}
      open
    >
      {/* Header with Hamburger */}
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: openDrawer ? 'flex-start' : 'center',
          px: 2,
        }}
      >
        <IconButton onClick={toggleDrawer} sx={{ color: '#fff' }}>
          <Menu />
        </IconButton>
      </Toolbar>
      <Divider />

      {/* Sidebar Menu */}
      <List>
        {/* Dashboard */}
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/" selected={isActive('/')}>
            <ListItemIcon sx={{ color: '#fff' }}>
              <Dashboard />
            </ListItemIcon>
            {openDrawer && <ListItemText primary="Dashboard" />}
          </ListItemButton>
        </ListItem>

        {/* Costing Master */}
        <ListItemButton onClick={() => setOpenCosting(!openCosting)}>
          <ListItemIcon sx={{ color: '#fff' }}>
            <Inventory />
          </ListItemIcon>
          {openDrawer && <ListItemText primary="Costing Master" />}
          {openDrawer && (openCosting ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
        <Collapse in={openCosting && openDrawer} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/assemblies">
              <ListItemText primary="Assemblies" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/resources">
              <ListItemText primary="Resources" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/cost-books">
              <ListItemText primary="Cost books" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Projects */}
        <ListItemButton onClick={() => setOpenProjects(!openProjects)}>
          <ListItemIcon sx={{ color: '#fff' }}>
            <Work />
          </ListItemIcon>
          {openDrawer && <ListItemText primary="Projects" />}
          {openDrawer && (openProjects ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
        <Collapse in={openProjects && openDrawer} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/projects-definative-estimate">
              <ListItemText primary="Definitive estimate" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/projects-control-Estimate">
              <ListItemText primary="Control estimate" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/projects-tenders">
              <ListItemText primary="Tenders" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Utilities */}
        <ListItemButton onClick={() => setOpenUtilities(!openUtilities)}>
          <ListItemIcon sx={{ color: '#fff' }}>
            <Build />
          </ListItemIcon>
          {openDrawer && <ListItemText primary="Utilities" />}
          {openDrawer && (openUtilities ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
        <Collapse in={openUtilities && openDrawer} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/utilities-Calculator">
              <ListItemText primary="Calculator" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/utilities-unit-converter">
              <ListItemText primary="Unit converter" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Bidders */}
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/bidders">
            <ListItemIcon sx={{ color: '#fff' }}>
              <Gavel />
            </ListItemIcon>
            {openDrawer && <ListItemText primary="Bidders" />}
          </ListItemButton>
        </ListItem>

        {/* Upload Documents */}
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/documents">
            <ListItemIcon sx={{ color: '#fff' }}>
              <CloudUpload />
            </ListItemIcon>
            {openDrawer && <ListItemText primary="Upload documents" />}
          </ListItemButton>
        </ListItem>

        {/* Reports */}
        <ListItemButton onClick={() => setOpenReports(!openReports)}>
          <ListItemIcon sx={{ color: '#fff' }}>
            <Assessment />
          </ListItemIcon>
          {openDrawer && <ListItemText primary="Reports" />}
          {openDrawer && (openReports ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
        <Collapse in={openReports && openDrawer} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} >
              <ListItemText primary="Costing master" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 6 }} component={Link} to="/reports/costing-master-assemblies">
              <ListItemText primary="Assemblies" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 6 }} component={Link} to="/reports/costing-master-resources">
              <ListItemText primary="Resources" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }} >
              <ListItemText primary="Projects" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 6 }} component={Link} to="/reports/projects-definative-estimate-report">
              <ListItemText primary="Definitive estimate" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 6 }} component={Link} to="/reports/projects-control-estimate-report">
              <ListItemText primary="Control estimate" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 6 }} component={Link} to="/reports/projects-tenders-report">
              <ListItemText primary="Tenders" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Users */}
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/users">
            <ListItemIcon sx={{ color: '#fff' }}>
              <People />
            </ListItemIcon>
            {openDrawer && <ListItemText primary="Users" />}
          </ListItemButton>
        </ListItem>
      </List>

      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      
    </Drawer>
  );
};

export default SideBar;
