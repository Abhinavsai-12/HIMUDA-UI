import React from 'react';
import InviteTender from '@/pages/InviteTenders';
import InviteTenderAdd from '@/components/Invite-Tender/inviteTenderAdd';

export const inviteTenderRoutes = [
  {
    path: 'invite-tender',
    element: <InviteTender />,
  },
  {
    path: 'invite-tender/create',
    element: <InviteTenderAdd />,
  },
];
