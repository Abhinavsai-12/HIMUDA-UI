import React from 'react';
import ProjectsAdd from '@/components/projects/projectsAdd';
import Projects from '@/pages/Projects';
export const projectRoutes = [
  {
    path: 'projects',
    element: <Projects />,
  },
  {
    path: 'projects/create',
    element: <ProjectsAdd />,
  },
];
