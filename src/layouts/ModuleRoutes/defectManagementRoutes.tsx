import React from 'react';
import DefectManagementMain from '@/components/defect-management/defectManagementMain';
import DefectManagementAdd from '@/components/defect-management/defectManagementAdd';
export const DefectManagementRoutes = [
  {
    path: 'defect-management',
    element: <DefectManagementMain />,
  },
  {
    path: 'defect-management/create',
    element: <DefectManagementAdd />,
  },
];
