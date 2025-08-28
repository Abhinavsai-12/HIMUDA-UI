import React from 'react';
import BudgetControlMain from '@/components/budget-control/budgetControlMain';
import BudgetControlAdd from '@/components/budget-control/budgetControlAdd';

export const BudgetControlRoutes = [
  {
    path: 'budget-control',
    element: <BudgetControlMain />,
  },
  {
    path: 'budget-control/create',
    element: <BudgetControlAdd />,
  }
];
