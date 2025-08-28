import React from 'react';
import Assemblies from '@/components/assemblies/assembliesMain';
import AssembliesSigningAdd from '@/components/assemblies/assembliesSigningAdd';

export const AssembliesSigningRoutes = [
  {
    path: 'assemblies',
    element: <Assemblies />,
  },
  {
    path: 'assemblies/create',
    element: <AssembliesSigningAdd />,
  },
];
