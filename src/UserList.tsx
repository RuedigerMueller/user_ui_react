import React, { ReactNode } from 'react';
import { UserTableActionBar } from './UserListActionBar';
import { UsersTable } from './UsersTable';

const defaultProps = Object.freeze({
    accessToken: '',
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
                <UsersTable accessToken={this.props.accessToken} />
            </div>
        );
    }
}