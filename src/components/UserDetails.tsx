import { FormGroup, FormInput, FormItem, FormLabel } from 'fundamental-react';
import React from 'react';

const initialState = Object.freeze({
    user: {
        id: -1,
        username: '',
        firstName: '',
        lastName: '',
        email: ''
    },
    editMode: false,
});

export const UserDetails: React.FC = () => {
    const state = initialState;
    return (
        <div className='userDetails'>
            <FormGroup>
                <FormItem>
                    <FormLabel htmlFor='username' required>
                        Username:
                    </FormLabel>
                    <FormInput
                        id='username'
                        value={state.user.username}
                        name='username'
                        disabled={!state.editMode}
                    />
                </FormItem>
                <FormItem>
                    <FormLabel htmlFor='firstName' required>
                        First Name:
                    </FormLabel>
                    <FormInput
                        id='firstName'
                        value={state.user.firstName}
                        name='firstName'
                        disabled={!state.editMode}
                    />
                </FormItem>
                <FormItem>
                    <FormLabel htmlFor='lastName' required>
                        Last Name:
                    </FormLabel>
                    <FormInput
                        id='lastName'
                        value={state.user.lastName}
                        name='lastName'
                        disabled={!state.editMode}
                    />
                </FormItem>
                <FormItem>
                    <FormLabel htmlFor='email' required>
                        eMail:
                    </FormLabel>
                    <FormInput
                        id='email'
                        value={state.user.email}
                        name='email'
                        disabled={!state.editMode}
                    />
                </FormItem>
            </FormGroup>
        </div>
    );
}