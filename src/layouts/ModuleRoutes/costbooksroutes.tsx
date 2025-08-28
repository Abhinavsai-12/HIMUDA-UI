import React from 'react';
import CostBooks from '@/components/costbooks/main';
import CostBooksAdd from '@/components/costbooks/add';

export const CostbooksRoutes = [
  {
    path: 'cost-books',
    element: <CostBooks />,
  },
  {
    path: 'cost-books/create',
    element: <CostBooksAdd />,
  },
];
