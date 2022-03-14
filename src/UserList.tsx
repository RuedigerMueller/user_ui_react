import axios from 'axios';
import { Select, Table } from 'fundamental-react';
import React, { ReactNode } from 'react';

export type User = {
    id: number,
    username: string,
    firstName: string,
    lastName: string,
    email: string
}

const defaultProps = Object.freeze({
    accessToken: '',
});
type Props = typeof defaultProps;

type State = {
    users: Array<User>
}

const initialState: State = {
    users: []
}

export class UserList extends React.Component<Props, State> {
    readonly state = initialState;

    getUsers = () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.accessToken}`
            }
        };

        axios
            .get('users', config)
            .then(response => {
                this.setState({
                    users: response.data
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.getUsers();
    }

    render(): ReactNode {
        return (
            <div className='userlist'>
                <Table
                    headers={[
                        'ID',
                        'Username',
                        'First Name',
                        'Last Name',
                        'Email',
                        'Actions',
                    ]}
                    tableData={
                        this.state.users.map(user => {
                            return ({
                                rowData: [
                                    user.id,
                                    user.username,
                                    user.firstName,
                                    user.lastName,
                                    user.email,
                                    <>
                                        <Select
                                            aria-label='Primary'
                                            options={[
                                                { key: '1', text: 'Edit' },
                                                { key: '2', text: 'Delete' },
                                                { key: '3', text: 'Assign Roles' },
                                            ]}
                                            placeholder='Select' 
                                            selectedKey = '1'
                                        />
                                    </>
                                ]
                            });
                        })
                    }
                />
            </div>
        );
    }
}