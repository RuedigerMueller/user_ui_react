import React, { ReactNode } from 'react';
import { screenActions } from '../App';
import { User } from '../type';
import { Login } from './Login';
import { UserDetails } from './UserDetails';
import { UserList } from './UserList';

const defaultProps = Object.freeze({
    isLoggedIn: false,
    displayUserList: false,
    displayUserDetail: false,
    displayUserRoles: false,
    user: {} as User,
    accessToken: '',
    onLogin: (accessToken: string): void => { },
    handleCanvasContentUpdate: (action: screenActions, user?: User): void => { },
});
type Props = typeof defaultProps;

const initialState = Object.freeze({
    userDetailEditMode: true as boolean,
 });
type State = typeof initialState;

export class Canvas extends React.Component<Props, State> {
    readonly state = initialState;

    render(): ReactNode {
        return (
            <div className='canvas'>
                { 
                    !this.props.isLoggedIn ? <Login onLogin={this.props.onLogin} /> : <></>
                }
                {
                    this.props.displayUserList ? 
                        <UserList 
                            accessToken={this.props.accessToken}
                            handleCanvasContentUpdate={this.props.handleCanvasContentUpdate}
                        /> :
                         <></>
                }
                {
                    this.props.displayUserDetail ? <UserDetails editMode={this.state.userDetailEditMode} user={this.props.user}/> : <></>
                }
                {
                    this.props.displayUserRoles ? <h1>User Roles</h1> :  <></>
                }
            </div>
        );
    }
}