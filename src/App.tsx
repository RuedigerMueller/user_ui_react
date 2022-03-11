import React, { ReactNode } from 'react';
import './App.css';
import { Login } from './Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
          {<Login onLogin={this.onLogin}/>}
        </div>
      );
    }
    return (
      <h1>You are logged in</h1>
    );
  }
}