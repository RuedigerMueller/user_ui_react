import { ActionBar, Button, Popover } from 'fundamental-react';
import React, { ReactNode } from 'react';
import { UserDetails } from './UserDetails';
import { User } from './UsersTable';

const defaultProps = Object.freeze({ });
type Props = typeof defaultProps;

const initialState = Object.freeze({});
type State = typeof initialState;

export class UserTableActionBar extends React.Component<Props, State> {
    readonly state = initialState;

    render(): ReactNode {
        const createdUser: User = {
            id: 4711,
            username: '',
            firstName: '',
            lastName: '',
            email: ''
        };
        return (
            
            <div className='userActions'
                style={{
                    textAlign: 'start',
                }}>
                <ActionBar
                    actions={(
                        <>
                            <Popover
                                body={<UserDetails user={createdUser} editMode={true}></UserDetails>}
                                control={<Button>Create</Button>}
                                placement='bottom'
                                type='grid'
                            />
                        </>
                    )}
                    description={'Manage application users'}
                    title={'Users'} />
            </div>
        );
    }
}