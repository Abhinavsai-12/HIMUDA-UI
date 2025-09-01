import React from 'react';
import DefinitiveEstimate from '@/components/definative-estimate/definativeestimateMain';
import DefinativeEstimateAdd from '@/components/definative-estimate/definativeEstimateAdd'
import Costbook from '@/components/definative-estimate/definativeEstimateCostbooks';
import OverHeads from '@/components/definative-estimate/definativeEstimateOverHeads';
import Costsheet from '@/components/definative-estimate/definativeEstimateCostsheet';
import AddAssembly from '@/components/definative-estimate/addAssemble';
import AddJob from '@/components/definative-estimate/addJob';

export const DefinativeEstimateRoutes = [
  {
    path: 'projects-definative-estimate',
    element: <DefinitiveEstimate />,
  },
  {
    path: 'projects-definative-estimate/add',
    element: <DefinativeEstimateAdd />,
  },
  {
    path: 'projects-definative-estimate/change-cost-books',
    element: <Costbook />,
  },

  {
    path: 'projects-definative-estimate/over-heads',
    element: <OverHeads />,
  },
  {
    path: 'projects-definative-estimate/cost-sheet',
    element: <Costsheet />,
  },

  {
    path: 'projects-definative-estimate/cost-sheet/add-assembly',
    element: <AddAssembly />,
  },

  {
    path: 'projects-definative-estimate/cost-sheet/add-job',
    element: <AddJob />,
  },
];
