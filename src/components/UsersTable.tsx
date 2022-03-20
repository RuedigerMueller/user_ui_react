import { Select, Table } from 'fundamental-react';
import React, { SyntheticEvent } from 'react';
import { useTypedSelector } from '../store/useTypeSelector';
import { Options, User } from '../type';

export const UsersTable: React.FC = () => {
    const { userList } = useTypedSelector((state) => state.login);
    //dispatch: Dispatch<any> = useDispatch()

    /*getUsers = () => {
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
    */

    const onSelect = (event: SyntheticEvent, selectedOption: Options): void => {
        //ToDo: feels like a hack - there must be a better way to provide the row context
        const dashPosition: number = selectedOption.key.indexOf('-');
        const userID: number = parseInt(selectedOption.key.substring(0, dashPosition));
        const action: number = parseInt(selectedOption.key.substring(dashPosition + 1, selectedOption.key.length));

        switch (action) {
            case 1: {
                console.log('edit');
                const user: User | undefined = userList.find((user) => user.id === userID);
                //this.props.handleCanvasContentUpdate(screenActions.edit, user);
                break;
            }
            case 2: {
                console.log('delete');
                /* React.useCallback(
                    (user: User) => this.dispatch(deleteUser(user)),
                    [this.dispatch, deleteUser]
                  ) */
                break;
            }
            case 3: {
                console.log('assign roles');
                //this.props.handleCanvasContentUpdate(screenActions.assignRoles);
                break;
            }
            default: {
                console.log('surprise')
                break;
            }
        }
    }

    /*

    componentDidMount() {
        this.getUsers();
    }
    */

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
                    userList.map(user => {
                        return ({
                            rowData: [
                                user.id,
                                user.username,
                                user.firstName,
                                user.lastName,
                                user.email,
                                <>
                                    <Select
                                        id={`my special ID ${user.id}`}
                                        key={user.id}
                                        //id={user.id.toString()}
                                        aria-label='Primary'
                                        options={[
                                            { key: `${user.id}-1`, text: 'Edit' },
                                            { key: `${user.id}-2`, text: 'Delete' },
                                            { key: `${user.id}-3`, text: 'Assign Roles' },
                                        ]}
                                        placeholder='Select'
                                        selectedKey={user.id.toString() + '-1'}
                                        onSelect={onSelect}
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