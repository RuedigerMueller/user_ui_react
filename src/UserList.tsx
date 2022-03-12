import React, { ReactNode } from 'react';
import axios from "axios";
import { Table } from 'fundamental-react';

type User = {
    id: number,
    username: string,
    firstName: string,
    lastName: string,
    email: string
}

type State = {
    users: Array<User>
}

const defaultProps = Object.freeze({
    accessToken: '',
});

type Props = typeof defaultProps;

const initialState: State = {
    users: []
}

const baseURL = "http://localhost:3001/users";

export class UserList extends React.Component<Props, State> {
    readonly state = initialState;

    componentDidMount() {
        var config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${this.props.accessToken}`
            }
        };

        axios
            .get(baseURL, config)
            .then(response => {
                console.log(response.data);
                this.setState({
                    users: response.data
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render(): ReactNode {
        const tableHeaders = [
            'ID',
            'Username',
            'First Name',
            'Last Name',
            'Email'
        ];

        // Todo: there must be a better way to convert the user table to table data....
        let tableData = [{
            rowData: [1, '', '', '', '']
        }];

        if (this.state.users) {
            tableData = [];
            for (let user of this.state.users) {
                let row = {
                    rowData: [
                        user.id,
                        user.username,
                        user.firstName,
                        user.lastName,
                        user.email
                    ]
                }
                tableData.push(row);
            }
        }    

        return (
            <div className="userlist">
                <h1>Users</h1>
                <Table
                    headers={tableHeaders}
                    tableData={tableData} />
            </div>
        );
    }
}