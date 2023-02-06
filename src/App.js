import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Login } from './Pages/Login';
import AddStudent from './Components/AddStudent';

import { atom } from 'recoil';


// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { loginState } from './StateAtoms/loginAtom';
import { useRecoilState } from 'recoil';

import LandingPage from './Pages/LandingPage';
import { createTheme, ThemeProvider } from '@mui/material';


const theme = createTheme({
  typography: {
    fontFamily: [
      // '-apple-system',
      // 'BlinkMacSystemFont',
      // '"Segoe UI"',
      // 'Roboto',
      // '"Helvetica Neue"',
      // 'Arial',
      // 'sans-serif',
      // '"Apple Color Emoji"',
      // '"Segoe UI Emoji"',
      // '"Segoe UI Symbol"',
      'Poppins'
    ].join(','),
  },
});





function App() {
  const [login, setLogin] = useRecoilState(loginState);
  // console.log(login.email.length);
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          maxWidth: '100vw',
          backgroundColor: '#fffcfb',
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {login.loggedIn ? <LandingPage /> : <Login />}
      </div>
      {/* // </RecoilRoot> */}
    </ThemeProvider>
  );
}

export default App;
