import { ActionBar, Button } from 'fundamental-react';
import React, { ReactNode } from 'react';

const defaultProps = Object.freeze({ });
type Props = typeof defaultProps;

const initialState = Object.freeze({ });
type State = typeof initialState;

export class UserActions extends React.Component<Props, State> {
    readonly state = initialState;

    render(): ReactNode {
        return (
            <div className='userActions'
                style={{
                    textAlign: 'start',
                }}>
                <ActionBar
                    actions={(
                        <>
                            <Button>Create</Button>
                            <Button>Edit</Button>
                            <Button>Delete</Button>
                            <Button>Assign Roles</Button>

                        </>
                    )}
                    description={'Manage application users'}
                    title={'Users'} />
            </div>
        );
    }
}