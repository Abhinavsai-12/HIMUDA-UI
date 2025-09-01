import React from 'react';
import Assemblies from '@/components/ReportsPage/costing-master/assembliesMain';
import AssembliesSigningAdd from '@/components/ReportsPage/costing-master/assembliesAdd';
import ResourcesMain from '@/components/ReportsPage/costing-master/ResourcesMain';
import ResourcesAdd from '@/components/ReportsPage/costing-master/ResourcesAdd';
import TendersReport from '@/components/ReportsPage/Projects-pages/tenderspage';
import ControlEstimateReport from '@/components/ReportsPage/Projects-pages/controlestimate';
import DefinativeEstimateReport from '@/components/ReportsPage/Projects-pages/definativeestimate';


export const ReportsCostingMasterRoutes = [
   //Assemblies 
  {
    path: 'reports/costing-master-assemblies',
    element: <Assemblies />,
  },
  {
    path: 'reports/costing-master-assemblies/create',
    element: <AssembliesSigningAdd />,
  },


   //   Resources page
  {
    path: 'reports/costing-master-resources',
    element: <ResourcesMain />,
  },
  {
    path: 'reports/costing-master-resources/create',
    element: <ResourcesAdd />,
  },


// Projects
  {
    path: 'reports/projects-tenders-report',
    element: <TendersReport />,
  },
  {
    path: 'reports/projects-control-estimate-report',
    element: <ControlEstimateReport />,
  },
  {
    path: 'reports/projects-definative-estimate-report',
    element: <DefinativeEstimateReport />,
  },








];




