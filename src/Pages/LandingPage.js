import { Container, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useRecoilState } from 'recoil'
import AddStudent from '../Components/AddStudent'
import ManageStudent from '../Components/ManageStudent'

const LandingPage = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      {/*header elements  */}
      <Grid
        container
        justifyContent={"space-between"}
        alignItems="center"
      >
        <AddStudent />
        <Box
        sx = {{
          border: "1px solid black",
        }}
        >
        klskdsd  
        </Box>
      </Grid>


      <div>happy</div>

    </Grid>
  )
}

export default LandingPage