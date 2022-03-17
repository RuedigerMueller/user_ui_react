import axios from 'axios';
import { Shellbar } from 'fundamental-react';
import React, { ReactNode } from 'react';
import './App.css';
import { Canvas } from './Canvas';
import { User } from './UsersTable';

export enum screenActions {
  create,
  edit,
  delete,
  assignRoles,
}

type Props = {};

const initialState = Object.freeze({
  isLoggedIn: false,
  accessToken: '',
  displayUserList: false,
  displayUserDetail: false,
  displayUserRoles: false,
  user: {
    id : 1,
    username: '',
    firstName: '',
    lastName: '',
    email: ''
  } as User
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

  handleCanvasContentUpdate = (action: screenActions, user?: User): void => {
    switch (action) {
      case screenActions.create: {
        console.log('hello');
        break;
      }
      case screenActions.edit: {
        this.setState({
          displayUserList: false,
          displayUserDetail: true,
          displayUserRoles: false,
          user: user as User
        });
        break;
      }
      case screenActions.delete: {
        break;
      }
      case screenActions.assignRoles: {
        this.setState({
          displayUserList: false,
          displayUserDetail: false,
          displayUserRoles: true,
        });
        break;
      }
      default : {
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
          isLoggedIn={this.state.isLoggedIn}
          displayUserList={this.state.displayUserList}
          displayUserDetail={this.state.displayUserDetail}
          displayUserRoles={this.state.displayUserRoles}
          user={this.state.user}
          accessToken={this.state.accessToken}
          onLogin={this.onLogin}
          handleCanvasContentUpdate={this.handleCanvasContentUpdate}
        />
      </div>
    );
  }
}