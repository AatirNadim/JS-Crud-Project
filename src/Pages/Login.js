import React from 'react'

// import {auth} from '../firebaseConfig'
// import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import { color } from '@mui/system';
// import TextField from '@mui/material/TextField';

export const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [showPassword, setShowPassword] = React.useState(false);
  const handleSignUp = (e) => {
    e.preventDefault();
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         // Signed in
    //         const user = userCredential.user;
    //         console.log(userCredential);
    //         // ...
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.log(error);
    //         // ..
    //     });

  }
  const handleSignIn = (e) => {
    e.preventDefault();
    //     signInWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         // Signed in
    //         const user = userCredential.user;
    //         console.log(userCredential);
    //         // ...
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.log(error)
    //     });
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);


  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Box
        component={'form'}
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          display: 'flex',
          flexDirection: 'column',
          width: 'fit-content',
          // backgroundColor: 'yellow',
          border: '1px solid #ff2108',
          padding: '1rem',
          borderRadius: '1rem',
          backgroundColor: 'fffcfb',
        }}
        noValidate
        autoComplete="off"
      >
        {/* <div> */}
        <TextField
          // required
          id="email_inp"
          label="Email ID"
          sx={{
            '& label.Mui-focused ': {
              borderColor: '#ff2108',
              color: '#ff2108',
            },
            fontSize: '2rem',

          }}
          onChange={(e) => {
            setEmail(e.target.value)
            console.log(email);
          }}
        />
        {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
        {/* </FormControl> */}

        <FormControl sx={{
          m: 1, width: '25ch', fontSize: '2rem',
          '& label.Mui-focused ': {
            borderColor: '#ff2108',
            color: '#ff2108',
          },
        }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            // sx = {{backgroundColor: 'red'}}
            onChange={(e) => {
              setPassword(e.target.value)
              setTimeout(() => {
                console.log(password)
              }, 1000)
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        {/* </div> */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-evenly',
            // backgroundColor: 'red',
          }}
        >
          <Button
            variant='contained'
            sx={{
              '&:hover': {
                backgroundColor: '#ff2108',
                color: 'white',
              },
              backgroundColor: 'white',
              border: '1px solid #ff2108',
              // hover: {
              //   backgroundColor: 'red',
              // }
              color: '#ff2108',
              fontWeight: 'bold',
            }}
          >
            {/* <Typography
              sx={{
                color: '#ff2108',
                fontFamily: 'Arial, sans-serif',
                fontWeight: 'bold',
              }}
            >Sign In</Typography> */}
            Sign IN
          </Button>
          <Button
            variant='contained'
            sx={{
              '&:hover': {
                backgroundColor: '#ff2108',
                color: 'white',
              },
              backgroundColor: 'white',
              border: '1px solid #ff2108',
              // hover: {
              //   backgroundColor: 'red',
              // }
              color: '#ff2108',
              fontWeight: 'bold',
            }}
            onClick={handleSignUp}

          >
            {/* <Typography
              sx={{
                '&:hover': {
                  backgroundColor: 'red',
                  color: 'white',
                },
                color: '#ff2108',
                fontFamily: 'Arial, sans-serif',
                fontWeight: 'bold',
              }}></Typography> */}
            Sign Up
          </Button>
        </Box>
      </Box>
    </div>
  )
}

// export default Login