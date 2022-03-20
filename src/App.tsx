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

/*
export class App extends React.Component<Props, State> {
  readonly state = initialState;

  onLogin = (accessToken: string): void => {
    console.log('onLogin');
    this.setState({
      accessToken: accessToken,
      displayState: {
        displayLogin: true,
        displayUserList: true,
        displayUserDetail: false,
        displayUserRoles: false,
      }
    })
  }

  handleCanvasContentUpdate = (action: screenActions, user?: User): void => {
    switch (action) {
      case screenActions.create: {
        console.log('hello');
        break;
      }
      case screenActions.edit: {
        this.setState({ 
          displayState: {
            displayLogin: false,
            displayUserList: false,
            displayUserDetail: true,
            displayUserRoles: false,
          },
          user: user as User
        });
        break;
      }
      case screenActions.delete: {
        break;
      }
      case screenActions.assignRoles: {
        this.setState({
          displayState: {
            displayLogin: false,
            displayUserList: false,
            displayUserDetail: false,
            displayUserRoles: true,
          }
        });
        break;
      }
      default: {
        console.log('unexpected action');
      }
    }
  }

  render(): ReactNode {
    return (
      <div className="App">
        <Shellbar
          logo={<img alt='SAP' src='//unpkg.com/fundamental-styles/dist/images/sap-logo.png' />}
          productTitle='User UI - React'
        />
        <Canvas
          user={this.state.user}
          accessToken={this.state.accessToken}
          onLogin={this.onLogin}
          //handleCanvasContentUpdate={this.handleCanvasContentUpdate}
        />
      </div>
    );
  }
}
*/