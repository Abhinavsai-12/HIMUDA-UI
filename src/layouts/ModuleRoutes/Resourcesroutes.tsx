import React from 'react';
// import ResourcesMain from '@/pages/Assemblies';
import ResourcesMain from '@/components/Resources-page/main';
import ResourcesAdd from '@/components/Resources-page/add';

export const ResourcesRoutes = [
  {
    path: 'resources',
    element: <ResourcesMain />,
  },
  {
    path: 'resources/create',
    element: <ResourcesAdd />,
  },
];
