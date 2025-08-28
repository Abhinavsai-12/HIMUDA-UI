import React from 'react';
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Box,
  Avatar,
} from '@mui/material';

import {
  NoteAdd,
  Gavel,
  GroupAdd,
  EventNote,
  LockOpen,
  AssignmentTurnedIn,
  AccountTree,
  Visibility,
  MonetizationOn,
  ReportProblem,
  PublishedWithChanges,
  CheckCircle,
  Archive,
} from '@mui/icons-material';

const menuItems = [
  { text: 'New Project', icon: <NoteAdd />, pathname: '/projects' },
  {
    text: 'Estimates & Proposal',
    icon: <Gavel />,
    pathname: '/estimates-proposal',
  },
  { text: 'Invite Tender', icon: <GroupAdd />, pathname: '/invite-tender' },
  {
    text: 'Pre-Bid Meeting',
    icon: <EventNote />,
    pathname: '/pre-bid-meeting',
  },
  { text: 'Tender Opening', icon: <LockOpen />, pathname: '/tender-opening' },
  {
    text: 'Agreement Signing',
    icon: <AssignmentTurnedIn />,
    pathname: '/agreement-signing',
  },
  {
    text: 'Budget Control',
    icon: <AccountTree />,
    pathname: '/budget-control',
  },
  {
    text: 'Work Breakdown',
    icon: <AccountTree />,
    pathname: '/work-break-down',
  },
  {
    text: 'Monitoring & Visits',
    icon: <Visibility />,
    pathname: '/monitoring',
  },
  { text: 'Payments & Bills', icon: <MonetizationOn />, pathname: '/payments' },
  { text: 'Defect Management', icon: <ReportProblem />, pathname: '/defects' },
  {
    text: 'Change Request',
    icon: <PublishedWithChanges />,
    pathname: '/change-request',
  },
  { text: 'Project Closure', icon: <CheckCircle />, pathname: '/closure' },
  { text: 'Archive', icon: <Archive />, pathname: '/archive' },
];

// Array of beautiful background gradients
const avatarColors = [
  'linear-gradient(135deg, #0A2540, #3E92CC)', // Blue
  'linear-gradient(135deg, #0E6251, #F6F1E9)', // Emerald
  'linear-gradient(135deg, #6A0572, #AB83A1)', // Violet
  'linear-gradient(135deg, #D7263D, #F46036)', // Red-Orange
  'linear-gradient(135deg, #1B998B, #EDF6F9)', // Teal
  'linear-gradient(135deg, #F4D35E, #EE964B)', // Golden Peach
  'linear-gradient(135deg, #005F73, #94D2BD)', // Aqua Green
  'linear-gradient(135deg, #8338EC, #3A0CA3)', // Purple
  'linear-gradient(135deg, #006D77, #83C5BE)', // Cool Green
  'linear-gradient(135deg, #FF6B6B, #FFD93D)', // Sunset
  'linear-gradient(135deg, #118AB2, #06D6A0)', // Cyan to Green
  'linear-gradient(135deg, #264653, #2A9D8F)', // Forest Green
  'linear-gradient(135deg, #E63946, #F1FAEE)', // Warm Red
  'linear-gradient(135deg, #14213D, #FCA311)', // Navy & Amber
];

const DashboardPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        ml: { xs: 0, sm: 4, md: 8 },
        mr: { xs: 0, sm: 2 },
      }}
    >
      <Typography variant="h4" fontWeight={600} mb={3}>
        Dashboard
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          justifyContent: { xs: 'center', sm: 'flex-start' },
        }}
      >
        {menuItems.map(({ text, icon, pathname }, index) => (
          <Box
            key={text}
            sx={{
              width: {
                xs: '100%',
                sm: 'calc(50% - 12px)',
                md: 'calc(33.33% - 16px)',
                lg: 'calc(25% - 18px)',
              },
              flexShrink: 0,
            }}
          >
            <Card
              elevation={4}
              sx={{
                borderRadius: 4,
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px) scale(1.03)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                },
              }}
            >
              <CardActionArea
                href={pathname}
                sx={{
                  px: 2,
                  py: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Avatar
                  sx={{
                    width: 52,
                    height: 52,
                    backgroundImage: avatarColors[index % avatarColors.length],
                    color: '#fff',
                    fontWeight: 'bold',
                  }}
                >
                  {icon}
                </Avatar>
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    color="text.primary"
                  >
                    {text}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DashboardPage;
