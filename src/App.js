import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Login} from './Pages/Login';

import { atom } from 'recoil';

import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
    <div>
      <Login />
    </div>
    </RecoilRoot>
  );
}

export default App;
