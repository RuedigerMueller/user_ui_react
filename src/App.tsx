import axios from 'axios';
import { Shellbar } from 'fundamental-react';
import React from 'react';
import './App.css';
import { Canvas } from './components/Canvas';

axios.defaults.baseURL = 'http://localhost:3001/';

export const App: React.FC = () => {

  return (
    <div className="App">
      <Shellbar
        logo={<img alt='SAP' src='//unpkg.com/fundamental-styles/dist/images/sap-logo.png' />}
        productTitle='User UI - React'
      />
      <Canvas/>
    </div>
  )
}
