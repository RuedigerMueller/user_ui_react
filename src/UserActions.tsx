import { ActionBar, Button } from 'fundamental-react';
import React, { ReactNode } from 'react';

const defaultProps = Object.freeze({ });
type Props = typeof defaultProps;

const initialState = Object.freeze({ });
type State = typeof initialState;

export class UserActions extends React.Component<Props, State> {
    readonly state = initialState;

    onCreate = () => {
        alert('Create not implemented yet');
    }

    onEdit = () => {
        alert('Edit not implemented yet');
    }

    onDelete = () => {
        alert('Delete not implemented yet');
    }

    onAssignRoles = () => {
        alert('Role assignment not implemented yet');
    }

    render(): ReactNode {
        return (
            <div className='userActions'
                style={{
                    textAlign: 'start',
                }}>
                <ActionBar
                    actions={(
                        <>
                            <Button onClick={this.onCreate}>Create</Button>
                            <Button onClick={this.onEdit}>Edit</Button>
                            <Button onClick={this.onDelete}>Delete</Button>
                            <Button onClick={this.onAssignRoles}>Assign Roles</Button>

                        </>
                    )}
                    description={'Manage application users'}
                    title={'Users'} />
            </div>
        );
    }
}