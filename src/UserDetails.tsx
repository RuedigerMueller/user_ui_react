import { FormGroup, FormInput, FormItem, FormLabel } from 'fundamental-react';
import React, { ReactNode } from 'react';
import { User } from './UserList';

type Props = {
    editMode: boolean,
    user: User
}

const initialState = Object.freeze({});
type State = typeof initialState;

export class UserDetails extends React.Component<Props, State> {
    readonly state = initialState;

    render(): ReactNode {
        return (
            <div className='userDetails'>
                <FormGroup>
                    <FormItem>
                        <FormLabel htmlFor='username' required>
                            Username:
                        </FormLabel>
                        <FormInput
                            id='username'
                            value={this.props.user.username}
                            name='username'
                            disabled={!this.props.editMode}
                        />
                    </FormItem>
                    <FormItem>
                        <FormLabel htmlFor='firstName' required>
                            First Name:
                        </FormLabel>
                        <FormInput
                            id='firstName'
                            value={this.props.user.firstName}
                            name='firstName'
                            disabled={!this.props.editMode}
                        />
                    </FormItem>
                    <FormItem>
                        <FormLabel htmlFor='lastName' required>
                            Last Name:
                        </FormLabel>
                        <FormInput
                            id='lastName'
                            value={this.props.user.lastName}
                            name='lastName'
                            disabled={!this.props.editMode}
                        />
                    </FormItem>
                    <FormItem>
                        <FormLabel htmlFor='email' required>
                            eMail:
                        </FormLabel>
                        <FormInput
                            id='email'
                            value={this.props.user.email}
                            name='email'
                            disabled={!this.props.editMode}
                        />
                    </FormItem>
                </FormGroup>
            </div>
        );
    }
}