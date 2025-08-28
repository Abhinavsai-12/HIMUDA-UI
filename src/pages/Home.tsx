import React from 'react';
import StyledDataGrid from '@/components/StyledDataGrid';

const rows = [
  { id: 1, name: 'John Doe', role: 'Admin' },
  { id: 2, name: 'Jane Smith', role: 'Editor' },
];

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'role', headerName: 'Role', flex: 1 },
];

const Home = () => (
  <div className="p-4">
    <StyledDataGrid rows={rows} columns={columns} />
  </div>
);

export default Home;
