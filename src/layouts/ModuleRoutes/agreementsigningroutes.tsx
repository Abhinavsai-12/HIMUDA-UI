import React from 'react';
import AgreementSigning from '@/pages/AgreementSigning';
import AgreementSigningAdd from '@/components/agreement-signing/agreementSigningAdd';

export const agreementSigningRoutes = [
  {
    path: 'agreement-signing',
    element: <AgreementSigning />,
  },
  {
    path: 'agreement-signing/create',
    element: <AgreementSigningAdd />,
  },
];
