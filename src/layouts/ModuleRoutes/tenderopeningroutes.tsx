import React from 'react';
import TenderOpening from '@/pages/TenderOpening';
import TenderOpeningAdd from '@/components/tender-opening/tenderOpeningAdd';

export const tenderopeningroutes = [
  {
    path: 'tender-opening',
    element: <TenderOpening />,
  },
  {
    path: 'tender-opening/create',
    element: <TenderOpeningAdd />,
  },
];
