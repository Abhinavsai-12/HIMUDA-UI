import React from 'react';
import MonitoringSiteVisits from '@/pages/MonitoringSite';
import MonitoringSiteVisitsAdd from '@/components/monitoring-site/monitoringSiteAdd';

export const monitoringSiteVisitsRoutes = [
  {
    path: 'monitoring-site-visits',
    element: <MonitoringSiteVisits />,
  },
  {
    path: 'monitoring-site-visits/create',
    element: <MonitoringSiteVisitsAdd />,
  },
];
