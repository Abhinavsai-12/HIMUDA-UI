import React from 'react';
import Bidders from '@/components/bidders/main';
import BiddersAdd from '@/components/bidders/add';

export const BidderRoutes = [
  {
    path: 'bidders',
    element: <Bidders />,
  },
  {
    path: 'bidders/create',
    element: <BiddersAdd />,
  },
];
