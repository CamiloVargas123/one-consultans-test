import { Box } from '@chakra-ui/react';
import { createTheme, ThemeProvider } from '@mui/material';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import type { } from '@mui/x-data-grid/themeAugmentation';
import { useState } from 'react';
import { User } from 'src/models/fullDataUser.type';

const theme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: 'trnasparent',
        },
      },
    },
  },
});



export default function Table() {
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const rows: GridRowsProp<User> = [
    { id: "1", firtName: "juan", lastName: "perez", levelStudy: "Universitario", title: "Ingeniria", age: 20, otherLanguage: "-" },
    { id: "2", firtName: "carlos", lastName: "vargas", levelStudy: "basico", title: "-", age: 20, otherLanguage: "Ingles" },
  ]

  const columns: GridColDef[] = [
    { field: 'firtName', headerName: 'Nombre' },
    { field: 'lastName', headerName: 'Apellidos' },
    { field: 'levelStudy', headerName: 'Estudios' },
    { field: 'title', headerName: 'Titulo acadeico', flex: 1 },
    { field: 'otherLanguage', headerName: 'Otros idiomas' },
    { field: 'age', headerName: 'Edad', width: 30, align: "right" },
  ]

  return (
    <Box w="100%">
      <ThemeProvider theme={theme}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={rowsPerPage}
          rowsPerPageOptions={[5, 7, 10]}
          onPageSizeChange={e => setRowsPerPage(e)}
          autoHeight
          disableColumnSelector
          disableSelectionOnClick
        />
      </ThemeProvider>
    </Box>
  )
}
