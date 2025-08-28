import React, { useState } from 'react';
import {
  Box,
  CssBaseline,
  Toolbar,
  useMediaQuery,
  useTheme,
  Container,
} from '@mui/material';
import SideBar from '../components/Sidebar';
import NavBar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const drawerWidth = 280;
const collapsedWidth = 64;

const MainLayout: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(true);

  const handleMobileToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDesktopToggle = () => {
    setDesktopOpen(!desktopOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <NavBar
        onMenuClick={handleMobileToggle}
        drawerWidth={drawerWidth}
        open={desktopOpen}
      />

      <SideBar
        mobileOpen={mobileOpen}
        onMobileToggle={handleMobileToggle}
        desktopOpen={desktopOpen}
        onDesktopToggle={handleDesktopToggle}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: '#f5f5f5',
          minHeight: '100vh',
          width: {
            xs: '100%',
            sm: `calc(100% - ${desktopOpen ? drawerWidth : collapsedWidth}px)`,
          },
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }}
      >
        <Toolbar />

        <Container
          maxWidth={false}
          sx={{
            py: 3,
            px: { xs: 2, sm: 3 },
            maxWidth: '100%',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#fff',
              borderRadius: 2,
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              p: { xs: 2, sm: 3 },
              minHeight: 'calc(100vh - 140px)',
              overflow: 'hidden',
            }}
          >
            <Outlet />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout;
