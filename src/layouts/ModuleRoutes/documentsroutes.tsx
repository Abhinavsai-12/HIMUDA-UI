import React from 'react';
import DocumentAdd from '@/components/Documentspage/add';
import Documents from '@/components/Documentspage/main';

export const DocumentRoutes = [
  {
    path: 'documents',
    element: <Documents />,
  },
  {
    path: 'documents/create',
    element: <DocumentAdd />,
  },
];
