import { Select, Table } from 'fundamental-react';
import React, { SyntheticEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { displayUser, displayUserRoles } from '../store/actionCreators/canvasActionCreator';
import { getUsers } from '../store/actionCreators/getUsersActionCreator';
import { setUserEditMode } from '../store/actionCreators/userActionCreator';
import { useTypedSelector } from '../store/useTypeSelector';
import { Options, User } from '../type';

export const UsersTable: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const { userList } = useTypedSelector((state) => state.getUsers);
    const { accessToken } = useTypedSelector((state) => state.login);

    const onSelect = (event: SyntheticEvent, selectedOption: Options): void => {
        //ToDo: feels like a hack - there must be a better way to provide the row context
        const dashPosition: number = selectedOption.key.indexOf('-');
        const userID: number = parseInt(selectedOption.key.substring(0, dashPosition));
        const action: number = parseInt(selectedOption.key.substring(dashPosition + 1, selectedOption.key.length));

        switch (action) {
            case 1: {
                console.log('edit');
                const user: User | undefined = userList.find((user) => user.id === userID);
                if (user) {
                    dispatch(displayUser());
                    dispatch(setUserEditMode(user));
                } else {
                    console.log('user not found');
                }
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
                dispatch(displayUserRoles());
                break;
            }
            default: {
                console.log('surprise')
                break;
            }
        }
    }

    useEffect(() => {
        dispatch(getUsers(accessToken));
    }, [dispatch]);

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
                                        key={user.id}
                                        id={user.id.toString()}
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