import React, { useEffect } from 'react'

import { auth } from '../firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

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
// import TextField from '@mui/material/TextField';

import { useRecoilState } from 'recoil';
import { loginState } from '../StateAtoms/loginAtom';
import styled from '@emotion/styled';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'brown',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'brown',
    },
    '&:hover fieldset': {
      borderColor: 'brown',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'brown',
    },
  },
});





export const Login = () => {
  // console.log('login page',auth)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [showPassword, setShowPassword] = React.useState(false);


  const [login, setLogin] = useRecoilState(loginState);
  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(userCredential);
        setLogin({ email: email, password: password, loggedIn: true })
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        alert(error.message)
        // ..
      });
    // console.log(email, password)
    // 
    // console.log(login);

  }
  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(userCredential);
        setLogin({ email: email, password: password, loggedIn: true })
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
        alert(error.message)
      });
    // console.log('sign in')
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);


  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // useEffect(() => {
  //   console.log(login);
  // }, [login])
  // const handleKeyPress = (e) => {
  //   if (e.key === 'Enter') {
  //     handleSignIn();
  //   }
  //   console.log(e.key)
  // }


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
          border: '1px solid #7a0d00',
          padding: '1rem',
          borderRadius: '1rem',
          backgroundColor: 'fffcfb',
          maxWidth: '100vw',
          boxSizing: 'border-box',
          maxWidth :'90vw'
        }}
        noValidate
        autoComplete="off"
      >
        {/* <div> */}
        <TextField
          // required
          // color="#ff2108"
          id="email_inp"
          label="Email ID"
          sx={{
            // '& label.Mui-focused ': {
            //   borderColor: 'green',
            //   color: '#ff2108',
            //   // backgroundColor: '#ff2108',
            // },
            '& label.Mui-focused': {
              color: '#7a0d00',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: '#7a0d00',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#7a0d00',
              },
              '&:hover fieldset': {
                borderColor: '#7a0d00',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#7a0d00',
              },
            },
            fontSize: '2rem',
            maxWidth: '87vw',
          }}
          onChange={(e) => {
            setEmail(e.target.value)
            // console.log(email);
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
          '& label.Mui-focused': {
            color: '#7a0d00',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#7a0d00',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#7a0d00',
            },
            '&:hover fieldset': {
              borderColor: '#7a0d00',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#7a0d00',
            },
          },
          maxWidth: '87vw',
        }}
        
        variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            // sx = {{backgroundColor: 'red'}}
            onChange={(e) => {
              setPassword(e.target.value)
              // console.log(password);
              // setTimeout(() => {
              //   console.log(password)
              // }, 1000)
            }}
            onKeyPress={(e) => {
              // e.preventDefault();
              if(e.key === 'Enter'){
                handleSignIn();
              }
              console.log(e.key)
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
            onClick={handleSignIn}
            
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