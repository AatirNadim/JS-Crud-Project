import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Login} from './Pages/Login';
import AddStudent from './Components/AddStudent';

import { atom } from 'recoil';


// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { loginState } from './StateAtoms/loginAtom';
import { useRecoilState } from 'recoil';

import LandingPage from './Pages/LandingPage';
function App() {
  const [login, setLogin] = useRecoilState(loginState);
  // console.log(login.email.length);
  return (
    
    <div>
      {login.loggedIn ? <LandingPage/> :<Login />}
    </div>
    // </RecoilRoot>
  );
}

export default App;
