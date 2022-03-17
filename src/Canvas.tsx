import React, { ReactNode } from 'react';
import { Login } from './Login';
import { UserDetails } from './UserDetails';
import { UserList } from './UserList';
import { User } from './UsersTable';

const defaultProps = Object.freeze({
    isLoggedIn: false,
    displayUserList: false,
    displayUserDetail: false,
    displayUserRoles: false,
    accessToken: '',
    onLogin: (accessToken: string): void => { },
});
type Props = typeof defaultProps;

const initialState = Object.freeze({
    userDetailEditMode: true as boolean,
    user: {
        id: 1,
        username: 'Admin',
        firstName: 'unknown',
        lastName: 'unknown',
        email: 'admin@example.com'
    } as User,
 });
type State = typeof initialState;

export class Canvas extends React.Component<Props, State> {
    readonly state = initialState;

    render(): ReactNode {
        return (
            <div className='canvas'>
                { 
                    !this.props.isLoggedIn ?
                        <Login onLogin={this.props.onLogin} />:
                        this.props.displayUserList ?
                            <UserList accessToken={this.props.accessToken}/>:
                            this.props.displayUserDetail ?
                                <UserDetails editMode={this.state.userDetailEditMode} user={this.state.user}/>:
                                this.props.displayUserRoles ?
                                    <h1>User Roles</h1>:
                                    <div></div>
                }
            </div>
        );
    }
}