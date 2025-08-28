import React from 'react';
import WorkBreakDown from '@/pages/WorkBreakDown';
import WorkBreakDownAdd from '@/components/work-breakdown/workBreakDownAdd';

export const workBreakDownRoutes = [
  {
    path: 'work-break-down',
    element: <WorkBreakDown />,
  },
  {
    path: 'work-break-down/create',
    element: <WorkBreakDownAdd />,
  },
];
