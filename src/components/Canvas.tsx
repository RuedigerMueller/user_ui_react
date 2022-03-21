import React from 'react';
import { useTypedSelector } from '../store/useTypeSelector';
import { Login } from './Login';
import { UserDetails } from './UserDetails';
import { UserList } from './UserList';

export const Canvas: React.FC = () => {
    const { displayState } = useTypedSelector((state) => state.canvas);

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
