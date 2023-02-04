import React from 'react'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import { classes } from '../Constants/classes'
import { sections } from '../Constants/sections'

import MenuItem from '@mui/material/MenuItem';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const AddStudent = () => {
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
        }}
      >
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
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {/* f1 */}
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
                  label="First Name"
                  sx={{
                    width: "100%",

                  }}
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
                  label="Select"
                  defaultValue={1}
                  sx = {{
                    // backgroundColor: "red",
                    width: "100%",
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
                  label="Select"
                  defaultValue={1}
                  sx={{
                    width: "100%",
                    // backgroundColor: "red",
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
                  placeholder='Enter roll number in digits'
                  sx={{
                    width: "100%",

                  }}
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
                />

              </Item>
            </Grid>

          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default AddStudent