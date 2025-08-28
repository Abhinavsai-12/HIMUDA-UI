import React from 'react';
import Users from '@/components/Users/main';
import UsersAdd from '@/components/Users/add';

export const UsersRoutes = [
  {
    path: 'users',
    element: <Users />,
  },
  {
    path: 'users/create',
    element: <UsersAdd />,
  },
];
