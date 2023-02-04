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

import DeleteModal from './Modals/DeleteModal';
import { studentObj } from '../Constants/student'; 
import { filler_rows } from '../Constants/filler_rows';
import { classes } from '../Constants/classes';

import { useRecoilState } from 'recoil';
import { studentAtom } from '../StateAtoms/studentAtom';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs };
// }

// console.log(rows);
export default function BasicTable() {

  const [student, setStudent] = useRecoilState(studentAtom);

  const handleView = () => {
    console.log('View');
  };
  const handleEdit = () => {
    console.log('Edit');
  }

  const handleDelete = () => {
    <DeleteModal />
    console.log('Delete')
  }
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
              {filler_rows.map((row, idx) => (
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
                    {`${row.firstName} ${row.lastName}`}
                  </TableCell>
                  <TableCell align="center">{classes[row.class - 1].label}</TableCell>
                  <TableCell align="center">{row.rollNo}</TableCell>
                  <TableCell align="center"
                  sx = {{
                    width: '300px',
                    padding: '0px',
                  }}
                  >
                  <List 
                  sx = {{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems  : 'center', 
                    width: '300px', 
                    // padding: '0px',
                    margin: '0px',
                  }}
                  >
                    <ListItem disablePadding
                    sx = {{
                      '&:hover': {
                        backgroundColor: '#ffe0e0',
                      },
                      // backgroundColor : 'yellow',
                      width: '100px',
                      display: 'flex',
                      height: '30px',
                      justifyContent: 'center',
                      borderRadius: '4px',
                      margin : '3px',
                      cursor: 'pointer',
                    }}

                    onClick = {handleView}
                    >
                      {View}
                    </ListItem>
                    <ListItem  disablePadding
                    sx = {{
                      '&:hover': {
                        backgroundColor: '#ffe0e0',
                      },
                      // backgroundColor : 'yellow',
                      width: '100px',
                      height: '30px',
                      display: 'flex',
                      justifyContent: 'center',
                      borderRadius: '4px',
                      margin : '3px',
                      cursor: 'pointer',
                    }}
                    onClick = {handleEdit}
                    
                    >
                      {Edit}
                    </ListItem>
                    <ListItem disablePadding
                    sx = {{
                      '&:hover': {
                        backgroundColor: '#ffe0e0',
                      },
                      // backgroundColor : 'yellow',
                      height: '30px',
                      width: '100px',
                      display: 'flex',
                      justifyContent: 'center',
                      borderRadius: '4px',
                      margin : '3px',
                      cursor: 'pointer',
                    }}
                    onClick = {handleDelete}
                    >
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
