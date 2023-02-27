import { Table, Paper, TableContainer, TableRow, TableHead, TableBody, styled, Box } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
) {
  return { name, calories, fat, };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0,),
  createData('Ice cream sandwich', 237, 9.0,),
  createData('Eclair', 262, 16.0,),
  createData('Cupcake', 305, 3.7,),
  createData('Gingerbread', 356, 16.0,),
  createData('Frozen yoghurt', 159, 6.0,),
  createData('Ice cream sandwich', 237, 9.0,),
  createData('Eclair', 262, 16.0,),
  createData('Cupcake', 305, 3.7,),
  createData('Gingerbread', 356, 16.0,),
  createData('Frozen yoghurt', 159, 6.0,),
  createData('Ice cream sandwich', 237, 9.0,),
  createData('Eclair', 262, 16.0,),
  createData('Cupcake', 305, 3.7,),
  createData('Gingerbread', 356, 16.0,),
  createData('Frozen yoghurt', 159, 6.0,),
  createData('Ice cream sandwich', 237, 9.0,),
  createData('Eclair', 262, 16.0,),
  createData('Cupcake', 305, 3.7,),
  createData('Gingerbread', 356, 16.0,),
];

export const AuthorsRoute = () => {
  return (
    <Box sx={{ p: '40px', overflow: 'auto', height: 'calc(100% - 69px)' }} >
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Dessert (100g serving)</StyledTableCell>
              <StyledTableCell align="right">Calories</StyledTableCell>
              <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}