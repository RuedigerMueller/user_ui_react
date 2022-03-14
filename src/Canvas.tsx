import React, { ReactNode } from 'react';
import { Login } from './Login';
import { UserListActionBar } from './UserListActionBar';
import { UserList } from './UserList';

const defaultProps = Object.freeze({
    isLoggedIn: false,
    accessToken: '',
    onLogin: (accessToken: string): void => { },
});
type Props = typeof defaultProps;

const initialState = Object.freeze({

 });
type State = typeof initialState;

export class Canvas extends React.Component<Props, State> {
    readonly state = initialState;

    render(): ReactNode {
        return (
            <div className='canvas'>
                { 
                    this.props.isLoggedIn ?
                    <>
                        <UserListActionBar></UserListActionBar>
                        <UserList accessToken={this.props.accessToken} />
                    </> :
                    <Login onLogin={this.props.onLogin} />
                }
            </div>
        );
    }
}