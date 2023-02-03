import React from 'react'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { TextField } from '@mui/material'

import MenuItem from '@mui/material/MenuItem';

const classes = [
  { value: 1, label: 'I',},
  { value: 2, label: 'II',},
  { value: 3, label: 'III',},
  { value: 4, label: 'IV', },
  { value: 5, label: 'V', },
  { value: 6, label: 'VI', },
  { value: 7, label: 'VII', },
  {value : 8, label : 'VIII' },
  { value : 9, label : 'IX' },
  { value : 10, label : 'X' },
  { value : 11, label : 'XI' },
  { value : 12, label : 'XII' },
];

const sections = [
{value : 1, label : 'A'},
{value : 2, label : 'B'},
{value : 3, label : 'C'},
{value : 4, label : 'D'},
{value : 5, label : 'E'},

]
const AddStudent = () => {
  return (
    <Box
      sx={{
        flex: "0.8",
      }}

    >
      {/* header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography>ADD STUDENT</Typography>
        <Box>Time</Box>
      </Box>
      {/* body */}
      <Grid container>
        <Grid container>
          <Grid item>
            <TextField
              required
              id="outlined-required"
              label="First Name"
            />
          </Grid>
          <Grid item>
            <TextField
              // required
              id="outlined-required"
              label="Middle Name"
            />
          </Grid>
          <Grid item><TextField
            required
            id="outlined-required"
            label="Last Name"
          /></Grid>
        </Grid>
        <Grid container>
          <Grid item>
          <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue={1}
          helperText="Please select your currency"
        >
          {classes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          </Grid>
          <Grid item>
          <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue={1}
          helperText="Please select your currency"
        >
          {sections.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          </Grid>
          <Grid item>val3</Grid>
        </Grid>
        <Grid container>
          <Grid item>val1</Grid>
          <Grid item>val2</Grid>
          <Grid item>val3</Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AddStudent