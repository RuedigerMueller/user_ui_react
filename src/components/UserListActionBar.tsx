import { ActionBar, Button } from 'fundamental-react';
import React from 'react';

export const UserTableActionBar: React.FC = () => {    
    /* const [displayState, setDisplayState] = React.useState<IDisplayState | {}>()

    const handleCreate = () => {
        console.log('handleCreate');
        setDisplayState({
            displayLogin: false,
            displayUserList: false,
            displayUserDetail: true,
            displayUserRoles: false,
        });
        console.log(displayState);
    } */

    return (
        <div className='userActions'
            style={{
                textAlign: 'start',
            }}>
            <ActionBar
                title={'Users'}
                description={'Manage application users'}
                actions={(
                    <Button 
                        // onClick={() => handleCreate()}
                    >
                        Create
                    </Button>
                )}
            />
        </div>
    );
  }

/*import { ActionBar, Button, Popover } from 'fundamental-react';
import React, { ReactNode } from 'react';
import { User } from '../type';
import { UserDetails } from './UserDetails';


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
*/