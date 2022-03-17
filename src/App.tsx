import axios from 'axios';
import { Shellbar } from 'fundamental-react';
import React, { ReactNode } from 'react';
import './App.css';
import { Canvas } from './Canvas';

type Props = {};

const initialState = Object.freeze({
  isLoggedIn: false,
  accessToken: '',
  displayUserList: false,
  displayUserDetail: false,
  displayUserRoles: false,
});

type State = typeof initialState;

axios.defaults.baseURL = 'http://localhost:3001/';

export class App extends React.Component<Props, State> {
  readonly state = initialState;

  onLogin = (accessToken: string): void => {
    this.setState({
      accessToken: accessToken,
      isLoggedIn: true,
      displayUserList: true,
      displayUserDetail: false,
      displayUserRoles: false,
    })
  }

  render(): ReactNode {
    return (
      <div className="App">
        <Shellbar
          logo={<img alt='SAP' src='//unpkg.com/fundamental-styles/dist/images/sap-logo.png' />}
          productTitle='User UI - React'
        />
        <Canvas
          isLoggedIn={this.state.isLoggedIn}
          displayUserList={this.state.displayUserList}
          displayUserDetail={this.state.displayUserDetail}
          displayUserRoles={this.state.displayUserRoles}
          accessToken={this.state.accessToken}
          onLogin={this.onLogin}
        />
      </div>
    );
  }
}