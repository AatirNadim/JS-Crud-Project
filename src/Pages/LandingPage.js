import { Container, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useRecoilState } from 'recoil'
import AddStudent from '../Components/AddStudent'
import ManageStudent from '../Components/ManageStudent'

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import { loginState } from '../StateAtoms/loginAtom'
import Sidebar from '../Components/Sidebar'

const LandingPage = () => {
  const [login, setLogin] = useRecoilState(loginState)
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: "#fffcfb",
      }}
    >
      {/*header elements  */}
      <Grid
        container
        justifyContent={"space-between"}
        alignItems="center"
      >
        <AddStudent />
        <Box
          sx={{
            border: "1px solid black",
            padding: "1rem 1.5rem",
            marginLeft: "2.4rem",
          }}
        >
          {login.loggedIn ?
            // <PersonOutlineIcon/>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <PersonOutlineIcon />
              {login.email}
            </Box>

            : <div>hello guest</div>}
        </Box>
      </Grid>
      <Grid
        container
        direction="row"
      >
        <Sidebar />
        <Box>
          <AddStudent />
        </Box>
      </Grid>

    </Grid>
  )
}

export default LandingPage