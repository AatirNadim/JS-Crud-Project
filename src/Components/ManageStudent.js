import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { backdropClasses, List, ListItem, ListItemButton, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { View, Edit, Delete } from '../Assets/icons';

import { DeleteModal } from './Modals/DeleteModal';
import { EditModal } from './Modals/EditModal';
import { ViewModal } from './Modals/ViewModal';
import { studentObj } from '../Constants/student';
import { filler_rows } from '../Constants/filler_rows';
import { classes } from '../Constants/classes';

import { useRecoilState } from 'recoil';
import { studentAtom } from '../StateAtoms/studentAtom';
import { modalAtom } from '../StateAtoms/modalAtom';

import Temp from './Modals/temp';
import { SetMealOutlined } from '@mui/icons-material';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs };
// }

// console.log(rows);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function BasicTable() {

  const [student, setStudent] = useRecoilState(studentAtom);
  // const [modalStr, setModalStr] = useRecoilState(modalAtom);
  const [selectedModal, setSelectedModal] = React.useState('');
  const [del, setDel] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [view, setView] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleView = () => {
    console.log('View');
  };
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEdit = () => {
    console.log('Edit');
  }

  const handleDelete = () => {
    console.log('yaha tk chl rha hai');
    // <DeleteModal />
    // console.log(student)
  }
  return (
    <Box>
      <DeleteModal />
      <EditModal /> <ViewModal />

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
                    sx={{
                      width: '300px',
                      padding: '0px',
                    }}
                  >
                    <List
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        width: '300px',
                        // padding: '0px',
                        margin: '0px',
                      }}
                    >
                      <ListItem disablePadding
                        sx={{
                          '&:hover': {
                            backgroundColor: '#ffe0e0',
                          },
                          // backgroundColor : 'yellow',
                          width: '100px',
                          display: 'flex',
                          height: '30px',
                          justifyContent: 'center',
                          borderRadius: '4px',
                          margin: '3px',
                          cursor: 'pointer',
                        }}

                        onClick={() => {
                          setDel(false);
                          setEdit(false);
                          setView(true);
                          setOpen(true);
                          setSelectedModal('ViewModal');
                        }}
                      >
                        {View}
                      </ListItem>
                      <ListItem disablePadding
                        sx={{
                          '&:hover': {
                            backgroundColor: '#ffe0e0',
                          },
                          // backgroundColor : 'yellow',
                          width: '100px',
                          height: '30px',
                          display: 'flex',
                          justifyContent: 'center',
                          borderRadius: '4px',
                          margin: '3px',
                          cursor: 'pointer',
                        }}
                        onClick={() => {
                          // setDel(false);
                          // setEdit(true);
                          // setView(false);
                          setOpen(true);
                          console.log('Edit');
                          setSelectedModal('EditModal');
                        }}

                      >
                        {Edit}
                      </ListItem>
                      <ListItem disablePadding
                        sx={{
                          '&:hover': {
                            backgroundColor: '#ffe0e0',
                          },
                          // backgroundColor : 'yellow',
                          height: '30px',
                          width: '100px',
                          display: 'flex',
                          justifyContent: 'center',
                          borderRadius: '4px',
                          margin: '3px',
                          cursor: 'pointer',
                        }}
                        onClick={() => {
                          setStudent(row);
                          console.log(student);
                          // <DeleteModal />;
                          setOpen(true);
                          setDel(true);
                          setEdit(false);
                          setView(false);
                          setSelectedModal('DeleteModal');
                          // setModalStr('DeleteModal')
                          // <Temp />
                        }}
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          {selectedModal === 'EditModal' ?
            <>i am edit content</> : selectedModal === 'DeleteModal' ? <>i am delete modal</> : <>
              i am view modal
            </>
          }
        </Box>
      </Modal>
    </Box>
  );
}
