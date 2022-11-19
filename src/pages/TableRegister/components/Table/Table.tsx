import { Box } from '@chakra-ui/react';
import { createTheme, ThemeProvider } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import type { } from '@mui/x-data-grid/themeAugmentation';
import { useEffect, useState } from 'react';
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


const columns: GridColDef[] = [
  { field: 'firtName', headerName: 'Nombre', flex: 1 },
  { field: 'lastName', headerName: 'Apellidos', flex: 1 },
  { field: 'levelStudy', headerName: 'Estudios', flex: 1 },
  { field: 'title', headerName: 'Titulo acadeico', flex: 1 },
  { field: 'otherLanguage', headerName: 'Otros idiomas' },
  { field: 'age', headerName: 'Edad', width: 30, align: "right" },
]

export default function Table() {
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [listData, setListData] = useState<User[]>([])

  useEffect(() => {
    let users = localStorage.getItem('users-one')
    if (users) {
      const formmated = JSON.parse(users)
      setListData(formmated)
    }
  }, [])

  return (
    <Box w="100%">
      <ThemeProvider theme={theme}>
        <DataGrid
          rows={listData}
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
