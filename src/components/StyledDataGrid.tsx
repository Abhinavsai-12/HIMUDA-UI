'use client';
import React from 'react';
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  DataGridProps,
  GridToolbar,
} from '@mui/x-data-grid';
import { useMediaQuery, Box, Paper, useTheme } from '@mui/material';

interface StyledDataGridProps extends Omit<DataGridProps, 'rows' | 'columns'> {
  rows: GridRowsProp;
  columns: GridColDef[];
  title?: string;
  showToolbar?: boolean;
}

const StyledDataGrid: React.FC<StyledDataGridProps> = ({
  rows,
  columns,
  title,
  showToolbar = true,
  ...props
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ width: '100%', height: '100%', marginTop: 2 }}>
      <Paper
        elevation={1}
        sx={{
          width: '100%',
          height: { xs: 'auto', sm: '70vh' },
          minHeight: 400,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            overflowX: 'auto',
            '&::-webkit-scrollbar': {
              height: '8px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#f1f1f1',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#c1c1c1',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: '#a8a8a8',
              },
            },
          }}
        >
          <Box
            sx={{
              minWidth: isMobile ? '1200px' : '100%',
              height: '100%',
              '& .MuiDataGrid-root': {
                border: 'none',
                fontFamily: theme.typography.fontFamily,
                fontSize: { xs: '0.75rem', sm: '0.875rem' },
              },
              '& .MuiDataGrid-main': {
                borderRadius: 0,
              },
              '& .MuiDataGrid-cell': {
                fontSize: { xs: '0.75rem', sm: '0.875rem' },
                paddingY: { xs: 0.5, sm: 1 },
                paddingX: { xs: 1, sm: 2 },
                borderBottom: '1px solid #e0e0e0',
                '&:focus': {
                  outline: 'none',
                },
                '&:focus-within': {
                  outline: 'none',
                },
              },
              '& .MuiDataGrid-columnHeaders': {
                backgroundColor: 'primary.main !important',
                color: 'fff !important',
                fontWeight: 600,
                fontSize: { xs: '0.8rem', sm: '0.95rem' },
                borderBottom: '2px solid #5a7299',
                '& .MuiDataGrid-columnHeader': {
                  backgroundColor: 'primary.main',
                  '&:focus': {
                    outline: 'none',
                  },
                  '&:focus-within': {
                    outline: 'none',
                  },
                },
                '& .MuiDataGrid-columnHeaderTitle': {
                  fontWeight: 600,
                  color: '#fff',
                },
              },
              '& .MuiDataGrid-row': {
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },
                '&.Mui-selected': {
                  backgroundColor: '#f0e9e3 !important',
                  '&:hover': {
                    backgroundColor: '#e8ddd4 !important',
                  },
                },
              },
              '& .MuiDataGrid-footerContainer': {
                backgroundColor: '#f8f9fa',
                borderTop: '1px solid #e0e0e0',
                color: '#333',
                fontSize: { xs: '0.75rem', sm: '0.875rem' },
                minHeight: { xs: 48, sm: 52 },
              },
              '& .MuiDataGrid-columnSeparator': {
                display: 'none',
              },
              '& .MuiDataGrid-selectedRowCount': {
                visibility: 'hidden',
              },
              '& .MuiCheckbox-root': {
                color: '#b37f59',
                '&.Mui-checked': {
                  color: '#b37f59',
                },
              },
              '& .MuiDataGrid-toolbar': {
                padding: { xs: 1, sm: 2 },
                backgroundColor: '#fafafa',
                borderBottom: '1px solid #e0e0e0',
                '& .MuiButton-root': {
                  fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  minHeight: { xs: 32, sm: 36 },
                },
              },
              '& .MuiDataGrid-toolbarContainer': {
                gap: 1,
                flexWrap: 'wrap',
              },
            }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              autoHeight={isMobile}
              disableRowSelectionOnClick
              pageSizeOptions={[10, 25, 50, 100]}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: isMobile ? 10 : 25,
                    page: 0,
                  },
                },
              }}
              slots={{
                toolbar: showToolbar ? GridToolbar : undefined,
              }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                  quickFilterProps: { debounceMs: 500 },
                },
              }}
              density={isMobile ? 'compact' : 'standard'}
              sx={{
                '& .MuiDataGrid-virtualScroller': {
                  overflowX: 'auto',
                },
                '& .MuiDataGrid-virtualScrollerContent': {
                  minWidth: isMobile ? '1200px' : '100%',
                },
              }}
              {...props}
            />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default StyledDataGrid;
