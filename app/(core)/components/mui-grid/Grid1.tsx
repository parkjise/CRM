import React from 'react';
import { basicsTableData, TableType } from './tableData';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const basics: TableType[] = basicsTableData;

const rows: GridRowsProp = [
  { id: 1, col1: "Hello", col2: "World" },
  { id: 2, col1: "MUI X", col2: "is awesome" },
  { id: 3, col1: "Material UI", col2: "is amazing" },
  { id: 4, col1: "MUI", col2: "" },
  { id: 5, col1: "Joy UI", col2: "is awesome" },
  { id: 6, col1: "MUI Base", col2: "is amazing" },
  { id: 7, col1: "Servce CRM", col2: "F12X25AC" }
];

const columns: GridColDef[] = [
  { field: "id", headerName: "seq", width: 150 },
  { field: "col1", headerName: "Id", width: 150 },
  { field: "col2", headerName: "Desc", width: 150 }
];


const Grid1 = () => {
  return (
      <div style={{height: 300, width: '100%'}}>
        <DataGrid rows={rows} columns={columns}/>
      </div>
  );
};

export default Grid1;
