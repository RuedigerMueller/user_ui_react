import React, { ReactNode } from 'react';
import { screenActions } from '../App';
import { User } from '../type';
import { UserTableActionBar } from './UserListActionBar';
import { UsersTable } from './UsersTable';

const defaultProps = Object.freeze({
    accessToken: '',
    handleCanvasContentUpdate: (action: screenActions, user?: User): void => { },
});
type Props = typeof defaultProps;

const initialState = Object.freeze({

});
type State = typeof initialState;

export class UserList extends React.Component<Props, State> {
    readonly state = initialState;

    render(): ReactNode {
        return (
            <div className='userList'>
                <UserTableActionBar></UserTableActionBar>
                <UsersTable 
                    accessToken={this.props.accessToken} 
                    handleCanvasContentUpdate={this.props.handleCanvasContentUpdate}
                />
            </div>
        );
    }
}