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
