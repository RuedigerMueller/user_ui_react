import { Shellbar } from 'fundamental-react';
import React, { ReactNode } from 'react';
import './App.css';
import { Login } from './Login';

type Props = {};

const initialState = Object.freeze({
  isLoggedIn: false,
  accessToken: '',
});

type State = typeof initialState;

export class App extends React.Component<Props, State> {
  readonly state = initialState;

  onLogin = (accessToken: string): void => {
    console.log('onLogin', accessToken);
    this.setState({
      accessToken: accessToken,
      isLoggedIn: true
    })
  }

  render(): ReactNode {
    if (!this.state.isLoggedIn) {
      return (
        <div className="App">
          <Shellbar
            logo={<img alt='SAP' src='//unpkg.com/fundamental-styles/dist/images/sap-logo.png' />}
            productTitle='User UI - React' />
          {<Login onLogin={this.onLogin} />}
        </div>
      );
    }
    return (
      <h1>You are logged in</h1>
    );
  }
}