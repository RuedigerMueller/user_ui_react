import { Shellbar } from 'fundamental-react';
import React, { ReactNode } from 'react';
import './App.css';
import { Canvas } from './Canvas';

type Props = {};

const initialState = Object.freeze({
  isLoggedIn: false,
  accessToken: '',
});

type State = typeof initialState;

export class App extends React.Component<Props, State> {
  readonly state = initialState;

  onLogin = (accessToken: string): void => {
    this.setState({
      accessToken: accessToken,
      isLoggedIn: true
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
          accessToken={this.state.accessToken}
          onLogin={this.onLogin}
        />
      </div>
    );
  }
}