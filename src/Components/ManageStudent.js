import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { backdropClasses, List, ListItem, ListItemButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { View, Edit, Delete } from '../Assets/icons';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData('Aatir', 159, 6.0, 24, 4.0),
  createData('Nadim', 237, 9.0, 37, 4.3),
  createData('Bosdmon', 262, 16.0, 24, 6.0),
  createData('Cheems', 305, 3.7, 67, 4.3),
  createData('abdabi', 356, 16.0, 49, 3.9),
];

// console.log(rows);
export default function BasicTable() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",

        }}
      >
        <Typography>ADD STUDENT</Typography>
        <Box>
          {/* add currernt time in pretty format */}
          Time
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead
              sx={{
                backgroundColor: '#f33823',
              }}
            >
              <TableRow
              >
                <TableCell align="center"
                  sx={{
                    color: '#ffffff',
                  }}
                >Name</TableCell>
                <TableCell align="center"
                  sx={{
                    color: '#ffffff',
                  }}
                >Class</TableCell>
                <TableCell align="center"
                  sx={{
                    color: '#ffffff',
                  }}>Roll No.</TableCell>
                <TableCell align="center"
                  sx={{
                    color: '#ffffff',
                  }}>View/Edit/Delete</TableCell>
                {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, idx) => (
                <TableRow
                  key={row.name}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },

                    backgroundColor: idx % 2 === 0 ? '#fff' : '#fff6f5',
                    border: 'none',
                    boxShadow: 'none',
                  }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.calories}</TableCell>
                  <TableCell align="center">{row.carbs}</TableCell>
                  <TableCell align="center">
                  <List 
                  sx = {{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems  : 'center', 
                  }}
                  >
                    <ListItem disablePadding
                    sx = {{
                      // backgroundColor : '#f33823',
                      width: '100px',
                    }}
                    >
                      {View}
                    </ListItem>
                    <ListItem  disablePadding
                    sx = {{
                      // backgroundColor : '#f33823',
                      width: '100px',
                    }}>
                      {Edit}
                    </ListItem>
                    <ListItem disablePadding
                    sx = {{
                      // backgroundColor : '#f33823',
                      width: '100px',
                    }}>
                      {Delete}
                    </ListItem>
                  </List>


                  </TableCell>
                  {/* <TableCell align="right">{row.protein}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
