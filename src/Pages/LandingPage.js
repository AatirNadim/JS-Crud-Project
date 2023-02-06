import { Container, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Typography } from '@mui/material'

import { useRecoilState } from 'recoil'
import AddStudent from '../Components/AddStudent'
import ManageStudent from '../Components/ManageStudent'

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import { loginState } from '../StateAtoms/loginAtom'
import Sidebar from '../Components/Sidebar'
import { TypeSpecimenOutlined } from '@mui/icons-material'
import TopBar from '../Components/TopBar'
import DrawerMain from '../Components/main'

const LandingPage = () => {
  const [login, setLogin] = useRecoilState(loginState)
  return (
    // <Grid
    //   container
    //   direction="column"
    //   justifyContent="center"
    //   alignItems="center"
    //   sx={{
    //     backgroundColor: "#fffcfb",
    //   }}
    // >
    //   {/*header elements  */}
    //   <Grid
    //     container
    //     justifyContent={"space-between"}
    //     alignItems="center"
    //   >
    //     <Typography
    //     sx = {{
    //       padding: "1rem 1.5rem",
    //       marginLeft: "2.4rem",
    //       color: "#847878",
    //       fontWeight: "bold",
    //     }}
    //     >
    //       LOGO  
    //     </Typography>
    //     <Box
    //       sx={{
    //         border: "1px solid black",
    //         padding: "1rem 1.5rem",
    //         marginRight: "2.4rem",
    //       }}
    //     >
    //       {login.loggedIn ?
    //         // <PersonOutlineIcon/>
    //         <Box
    //           sx={{
    //             display: "flex",
    //             alignItems: "center",
    //             gap: "1rem",
    //           }}
    //         >
    //           <PersonOutlineIcon />
    //           {login.email}
    //         </Box>

    //         : <div>hello guest</div>}
    //     </Box>
    //   </Grid> 
    //   <Grid
    //     container
    //     direction="row"
    //     // display="flex"
    //     // flexDirection="row"

    //   >
    //     <Grid item><Sidebar /></Grid>

    //     <Grid item>
    //       <AddStudent />
    //     </Grid>
    //   </Grid>

    // </Grid>
    // 
    <Box
    sx = {{
      backgroundColor: '#fffcfb',
    }}
    >
      <DrawerMain />
    </Box>
  )
}

export default LandingPage