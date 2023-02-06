import React from 'react'
import { Button, Grid } from '@mui/material'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import { classes } from '../Constants/classes'
import { sections } from '../Constants/sections'
import { studentObj } from '../Constants/student'

import MenuItem from '@mui/material/MenuItem';

import { useRecoilState } from 'recoil'
import { modalAtom } from '../StateAtoms/modalAtom'
import { db } from '../firebaseConfig'

import { getDatabase, ref, set, push } from "firebase/database";
import { studentAtom } from '../StateAtoms/studentAtom'



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  // zIndex: -1,
}));



export const Form = () => {
  
  const [studentState, setStudentState] = useRecoilState(studentAtom)
  const [student, setStudent] = React.useState(studentState);
  const [modal, setModal] = useRecoilState(modalAtom)
  const [time, setTime] = React.useState(new Date())
  // console.log(modal)
  
  const handleClick = () => {
    console.log(student)

    try {
      const originalRef = ref(db, '/children');
      const newRef = push(originalRef);
      set(newRef, student)
      alert('Student Added Successfully')
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    console.log(student)
  }, [student])

  return (
    // <Box
    // sx={{
    //   flex: "0.8",
    //   // backgroundColor: "red",
    // }}

    // >
    //   {/* header */}
    //   <Box
    //     sx={{
    //       display: "flex",
    //       justifyContent: "space-between",
    //     }}
    //   >
    //     <Typography>ADD STUDENT</Typography>
    //     <Box>Time</Box>
    //   </Box>
    //   {/* body */}
    //   <Grid container>
    //     <Grid container>
    //       <Grid item>
    //         <TextField
    //           required
    //           id="outlined-required"
    //           label="First Name"
    //         />
    //       </Grid>
    //       <Grid item>
    //         <TextField
    //           // required
    //           id="outlined-required"
    //           label="Middle Name"
    //         />
    //       </Grid>
    //       <Grid item><TextField
    //         required
    //         id="outlined-required"
    //         label="Last Name"
    //       /></Grid>
    //     </Grid>
    //     <Grid container>
    //       <Grid item>
    //         <TextField
    //           id="outlined-select-currency"
    //           select
    //           label="Select"
    //           defaultValue={1}
    //         // helperText="Please select your currency"
    //         >
    //           {classes.map((option) => (
    //             <MenuItem key={option.value} value={option.value}>
    //               {option.label}
    //             </MenuItem>
    //           ))}
    //         </TextField>
    //       </Grid>
    //       <Grid item>
    //         <TextField
    //           id="outlined-select-currency"
    //           select
    //           label="Select"
    //           defaultValue={1}
    //           sx={{
    //             '& .MuiTextField-root': { m: 1, width: '25ch' },
    //             // backgroundColor: "red",
    //           }}
    //         // helperText="Please select your currency"
    //         >
    //           {sections.map((option) => (
    //             <MenuItem key={option.value} value={option.value}>
    //               {option.label}
    //             </MenuItem>
    //           ))}
    //         </TextField>
    //       </Grid>
    //       <Grid item>val3</Grid>
    //     </Grid>
    //     <Grid container>
    //       <Grid item>val1</Grid>
    //       <Grid item>val2</Grid>
    //       <Grid item>val3</Grid>
    //     </Grid>
    //   </Grid>
    // </Box>
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          backgroundColor: "#fffcfb ",
          // backgroundColor: "green",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",

          }}
        >
          <Typography
            sx={{
              // fontFamily: "Poppins",
              fontWeight: "bold",
            }}
          >{student.firstName.length > 0 ? 'UPDATE STUDENT' : 'ADD STUDENT'}</Typography>
          <Box>
            {/* add currernt time in pretty format */}
            {`${(new Date().getHours())}:${(new Date().getMinutes())}:${(new Date().getSeconds())}`}
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {/* f1 */}
            <Grid item xs={2} sm={4} md={4} >
              <Item
                sx={{
                  //remove shadow
                  boxShadow: "none",
                  // backgroundColor: "black",

                }}
              >
                <TextField
                  // {...modal.f}
                  required
                  id="outlined-required"
                  label="First Name"
                  sx={{
                    width: "100%",

                  }}
                  onChange={(e) => {
                    setStudent({ ...student, firstName: e.target.value })
                  }}
                  placeholder = {student.firstName.length > 0 ? student.firstName : "First Name"}
                  // placeholder="Aatir Name"
                />

              </Item>
            </Grid>
            {/* f2 */}
            <Grid item xs={2} sm={4} md={4} >
              <Item
                sx={{
                  //remove shadow
                  boxShadow: "none",


                }}
              >
                <TextField
                  // required
                  id="outlined-required"
                  label="Middle Name"
                  sx={{
                    width: "100%",

                  }}
                  onChange={(e) => {
                    setStudent({ ...student, middleName: e.target.value })
                  }}
                  placeholder = {student.middleName.length > 0 ? student.middleName : "Middle Name"}
                />

              </Item>
            </Grid>
            {/* f3 */}
            <Grid item xs={2} sm={4} md={4} >
              <Item
                sx={{
                  //remove shadow
                  boxShadow: "none",


                }}
              >
                <TextField
                  required
                  id="outlined-required"
                  label="Last Name"
                  sx={{
                    width: "100%",

                  }}
                  onChange={(e) => {
                    setStudent({ ...student, lastName: e.target.value })
                  }}
                  placeholder = {student.lastName.length > 0 ? student.lastName : "Last Name"}
                />

              </Item>
            </Grid>
            {/* f4 */}
            <Grid item xs={2} sm={4} md={4} >
              <Item
                sx={{
                  //remove shadow
                  boxShadow: "none",
                  // backgroundColor: "red",

                }}
              >
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Class"
                  defaultValue={1}
                  sx={{
                    // backgroundColor: "red",
                    width: "100%",
                  }}
                  onChange={(e) => {
                    setStudent({ ...student, class: e.target.value })
                  }}
                // helperText="Please select your currency"
                >
                  {classes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

              </Item>
            </Grid>
            {/* f5 */}
            <Grid item xs={2} sm={4} md={4} >
              <Item
                sx={{
                  //remove shadow
                  boxShadow: "none",


                }}
              >
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Section"
                  defaultValue={1}
                  sx={{
                    width: "100%",
                    // backgroundColor: "red",
                  }}
                  onChange={(e) => {
                    setStudent({ ...student, section: e.target.value })
                  }}
                // helperText="Please select your currency"
                >
                  {sections.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

              </Item>
            </Grid>
            {/* f6 */}
            <Grid item xs={2} sm={4} md={4} >
              <Item
                sx={{
                  //remove shadow
                  boxShadow: "none",


                }}
              >
                <TextField
                  required
                  id="outlined-required"
                  label="Roll No"
                  // placeholder='Enter roll number in digits'
                  sx={{
                    width: "100%",

                  }}
                  onChange={(e) => {
                    setStudent({ ...student, rollNo: e.target.value })
                  }}
                  placeholder = {student.rollNo.length > 0 ? student.rollNo : "Enter roll number in digits"}
                />

              </Item>
            </Grid>
            {/* f7 */}
            <Grid item xs={6} sm={6} md={6} >
              <Item
                sx={{
                  //remove shadow
                  boxShadow: "none",


                }}
              >
                <TextField
                  // required
                  multiline
                  rows={1}
                  id="outlined-required"
                  label="Address Line1"
                  sx={{
                    width: "100%",

                  }}
                  onChange={(e) => {
                    setStudent({ ...student, address1: e.target.value })
                  }}
                  placeholder = {student.address1.length > 0 ? student.address1 : "Address Line1"}
                />

              </Item>
            </Grid>
            {/* f8 */}
            <Grid item xs={6} sm={6} md={6} >
              <Item
                sx={{
                  //remove shadow
                  boxShadow: "none",


                }}
              >
                <TextField
                  // required
                  multiline
                  rows={1}
                  id="outlined-required"
                  label="Address Line2"
                  sx={{
                    width: "100%",

                  }}
                  onChange={(e) => {
                    setStudent({ ...student, address2: e.target.value })
                  }}
                  placeholder = {student.address2.length > 0 ? student.address2 : "Address Line2"}

                />

              </Item>
            </Grid>
            {/* f9 */}
            <Grid item xs={2} sm={4} md={4} >
              <Item
                sx={{
                  //remove shadow
                  boxShadow: "none",


                }}
              >
                <TextField
                  // required
                  id="outlined-required"
                  label="Landmark"
                  sx={{
                    width: "100%",

                  }}
                  onChange={(e) => {
                    setStudent({ ...student, landmark: e.target.value })
                  }}
                  placeholder = {student.landmark.length > 0 ? student.landmark : "Landmark"}
                />

              </Item>
            </Grid>
            {/* f10 */}
            <Grid item xs={2} sm={4} md={4} >
              <Item
                sx={{
                  //remove shadow
                  boxShadow: "none",


                }}
              >
                <TextField
                  // required
                  id="outlined-required"
                  label="City"
                  sx={{
                    width: "100%",

                  }}
                  onChange={(e) => {
                    setStudent({ ...student, city: e.target.value })
                  }}
                  placeholder = {student.city.length > 0 ? student.city : "City"}
                />

              </Item>
            </Grid>
            {/* f11 */}
            <Grid item xs={2} sm={4} md={4} >
              <Item
                sx={{
                  //remove shadow
                  boxShadow: "none",


                }}
              >
                <TextField
                  // required
                  id="outlined-required"
                  label="Pin Code"
                  sx={{
                    width: "100%",

                  }}
                  onChange={(e) => {
                    setStudent({ ...student, pincode: e.target.value })
                  }}
                  placeholder = {student.pincode.length > 0 ? student.pincode : "Pin Code"}
                />

              </Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4} >
              <Item
                sx={{
                  //remove shadow
                  boxShadow: "none",

                  width: "100%",
                  padding: "0px",
                }}
              >
                <Button
                  sx={{
                    '&:hover': {
                      backgroundColor: '#c02c1b',
                    },
                    width: "100%",
                    backgroundColor: "#ff2108",
                    color: "white",
                    textTransform: "capitalize",
                    fontWeight: "550",
                  }}
                  onClick={handleClick}
                >{student.firstName.length > 0 ? 'Update Student' : 'Add Student'}</Button>

              </Item>

            </Grid>

          </Grid>
        </Box>
      </Box>
    </>
  )
}
