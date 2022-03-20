import React from 'react';
import { useTypedSelector } from '../store/useTypeSelector';
import { Login } from './Login';
import { UserDetails } from './UserDetails';
import { UserList } from './UserList';

export const Canvas: React.FC = () => {
    const { displayState } = useTypedSelector((state) => state.login);

    return (
        <div className='canvas'>
            {
                displayState.displayLogin ? <Login /> : <></>
            }
            {
                displayState.displayUserList ? <UserList /> : <></>
            }
            {
                displayState.displayUserDetail ? <UserDetails /> : <></>
            }
            {
                displayState.displayUserRoles ? <h1>User Roles</h1> : <></>
            }
        </div>
    );
}
/*import { screenActions } from '../App';
import { IDisplayState, User } from '../type';
import { Login } from './Login';
import { UserDetails } from './UserDetails';
import { UserList } from './UserList';

const defaultProps = Object.freeze({
    displayState: {} as IDisplayState,
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
                    !this.props.displayState.displayLogin ? <Login onLogin={this.props.onLogin} /> : <></>
                }
                {
                    this.props.displayState.displayUserList ? 
                        <UserList 
                            accessToken={this.props.accessToken}
                            handleCanvasContentUpdate={this.props.handleCanvasContentUpdate}
                        /> :
                         <></>
                }
                {
                    this.props.displayState.displayUserDetail ? <UserDetails editMode={this.state.userDetailEditMode} user={this.props.user}/> : <></>
                }
                {
                    this.props.displayState.displayUserRoles ? <h1>User Roles</h1> :  <></>
                }
            </div>
        );
    }
}
*/