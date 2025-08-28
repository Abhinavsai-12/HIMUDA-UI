import React from 'react';
import EstimatesAdd from '@/components/estimates-proposal/estimateAdd';
import EstimatesPraposal from '@/pages/EstimatePraposal';
export const EstimatesRoutes = [
  {
    path: 'estimates-proposal',
    element: <EstimatesPraposal />,
  },
  {
    path: 'estimates-proposal/create',
    element: <EstimatesAdd />,
  },
];
