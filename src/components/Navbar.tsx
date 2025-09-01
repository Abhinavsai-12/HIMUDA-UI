
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box,
  Breadcrumbs,
  Link,
  useTheme,
  Menu,
  MenuItem,
  useMediaQuery,
} from '@mui/material';
import { Menu as MenuIcon, Home } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

interface NavBarProps {
  onMenuClick: () => void;
  drawerWidth: number;
  open: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ onMenuClick, drawerWidth, open }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const dropdownopen = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    const breadcrumbs = [
      <Link
        key="home"
        color="inherit"
        href="/"
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <Home sx={{ mr: 0.5, fontSize: 18 }} />
        Home
      </Link>,
    ];

    pathnames.forEach((value, index) => {
      const to = `/${pathnames.slice(0, index + 1).join('/')}`;
      const isLast = index === pathnames.length - 1;

      const label = value
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      if (isLast) {
        breadcrumbs.push(
          <Typography key={to} color="inherit" sx={{ fontWeight: 600 }}>
            {label}
          </Typography>
        );
      } else {
        breadcrumbs.push(
          <Link key={to} color="inherit" href={to}>
            {label}
          </Link>
        );
      }
    });

    return breadcrumbs;
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'secondary.main',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        width: {
          xs: '100%',
          sm: `calc(100% - ${open ? drawerWidth : 64}px)`,
        },
        ml: {
          xs: 0,
          sm: `${open ? drawerWidth : 64}px`,
        },
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <img
          src="/logo.png"
          alt="Himuda Logo"
          style={{ height: 70, marginRight: 16, padding: 2 }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {isMobile ? (
            <Typography variant="h6" noWrap component="div">
              HIMUDA
            </Typography>
          ) : (
            <Box>
              <Typography variant="h6" noWrap component="div" sx={{ mb: 0.5 }}>
                HIMUDA
              </Typography>
              <Breadcrumbs
                separator="›"
                aria-label="breadcrumb"
                sx={{
                  fontSize: '0.875rem',
                  '& .MuiBreadcrumbs-separator': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                  '& a': {
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    '&:hover': {
                      color: '#fff',
                    },
                  },
                }}
              >
                {getBreadcrumbs()}
              </Breadcrumbs>
            </Box>
          )}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton onClick={handleClick} size="small">
            <Avatar
              sx={{
                width: 40,
                height: 40,
                border: '2px solid rgba(255, 255, 255, 0.2)',
                bgcolor: '#3f51b5',
                color: 'white',
                fontWeight: 600,
              }}
            >
              H
            </Avatar>
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={dropdownopen}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                window.location.href = '/login';
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
