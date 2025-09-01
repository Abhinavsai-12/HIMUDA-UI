import React from 'react';
import ControlEstimate from '@/components/control-estimate/control-estimate';
import ControlEstimateAddEstimate from '@/components/control-estimate/addEstimate';
import ControlEstimateAddProjects from '@/components/control-estimate/addProjects';

export const ControlEstimateRoutes = [
  {
    path: 'projects-control-Estimate',
    element: <ControlEstimate />,
  },
  {
    path: 'projects-control-Estimate/addEstimate',
    element: <ControlEstimateAddEstimate />,
  },
  {
    path: 'projects-control-Estimate/addProjects',
    element: <ControlEstimateAddProjects />,
  },
];
