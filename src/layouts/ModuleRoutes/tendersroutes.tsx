import React from 'react';
import TendersMain from '@/components/tenderspage/tendersmain';
import TendersAddDirectory from '@/components/tenderspage/directoryAdd';
import TendersAddTender from '@/components/tenderspage/tenderAdd';

export const TenderRoutes = [
  {
    path: 'projects-tenders',
    element: <TendersMain />,
  },
  {
    path: 'projects-tenders/addDirectory',
    element: <TendersAddDirectory />,
  },
  {
    path: 'projects-tenders/addTender',
    element: <TendersAddTender />,
  },
];
