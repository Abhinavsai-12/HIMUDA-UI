import React from 'react';

import Calculator from '@/components/utilities-module/Calculator';
import UnitConverter from '@/components/utilities-module/unitconverter';

export const UtilitiesRoutes = [ 

  
  {
    path: 'utilities/Calculator',
    element: <Calculator />,
  },
  {
    path: 'utilities/unit-converter',
    element: <UnitConverter/>,
  },


];




