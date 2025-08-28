import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import NotFound from '@/pages/NotFound';

import { projectRoutes } from '@/layouts/ModuleRoutes/ProjectRoutes';
import { UserRoutes } from './ModuleRoutes/UserRoutes';
import { inviteTenderRoutes } from './ModuleRoutes/invitetenderroutes';
import { PrebidMeetingRoutes } from './ModuleRoutes/PreBidMeetingRoutes';
import { BudgetControlRoutes } from './ModuleRoutes/BudgetControlRoutes';
import { tenderopeningroutes } from './ModuleRoutes/tenderopeningroutes';
import { agreementSigningRoutes } from './ModuleRoutes/agreementsigningroutes';
import { workBreakDownRoutes } from './ModuleRoutes/workbreakdownroutes';
import { monitoringSiteVisitsRoutes } from './ModuleRoutes/monitoringsiteroutes';
import { projectClosureRoutes } from './ModuleRoutes/projectclosureroutes';
import { EstimatesRoutes } from './ModuleRoutes/EstimatesRoutes';
import { paymentsRunningBillsRoutes } from './ModuleRoutes/paymentrunningroute';
import { changerequestroutes } from './ModuleRoutes/changerequestroutes';
import { DefectManagementRoutes } from './ModuleRoutes/defectManagementRoutes';
import { LoginRoutes } from './ModuleRoutes/LoginRoutes';
import { AssembliesSigningRoutes } from './ModuleRoutes/assembliesroutes';
import { ResourcesRoutes } from './ModuleRoutes/Resourcesroutes';
import { UsersRoutes } from './ModuleRoutes/usersroutes';
import { ReportsCostingMasterRoutes } from './ModuleRoutes/Reportsroutes';
import { CostbooksRoutes } from './ModuleRoutes/costbooksroutes';
import { BidderRoutes } from './ModuleRoutes/bidderroutes';
import { DocumentRoutes } from './ModuleRoutes/documentsroutes';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      {[
        ...AssembliesSigningRoutes,
        ...ResourcesRoutes,
        ...CostbooksRoutes,
        ...UsersRoutes,
        ...DocumentRoutes,
        ...BidderRoutes,
        ...ReportsCostingMasterRoutes,
        ...projectRoutes,
        ...inviteTenderRoutes,
        ...tenderopeningroutes,
        ...PrebidMeetingRoutes,
        ...UserRoutes,
        ...agreementSigningRoutes,
        ...workBreakDownRoutes,
        ...monitoringSiteVisitsRoutes,
        ...projectClosureRoutes,
        ...BudgetControlRoutes,
        ...EstimatesRoutes,
        ...PrebidMeetingRoutes,
        ...paymentsRunningBillsRoutes,
        ...changerequestroutes,
        ...DefectManagementRoutes,
        ...LoginRoutes,
      ].map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
    </Route>

    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
