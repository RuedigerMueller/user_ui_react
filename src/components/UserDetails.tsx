import { FormGroup, FormInput, FormItem, FormLabel } from 'fundamental-react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { useTypedSelector } from '../store/useTypeSelector';
import { UserDialogMode } from '../type';


export const UserDetails: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const { user } = useTypedSelector((state) => state.user);
    const { mode } = useTypedSelector((state) => state.user);
    const { accessToken } = useTypedSelector((state) => state.login);

    return (
        <div className='userDetails'>
            <FormGroup>
                <FormItem>
                    <FormLabel htmlFor='username' required>
                        Username:
                    </FormLabel>
                    <FormInput
                        id='username'
                        value={user.username}
                        name='username'
                        disabled={mode==='display'}
                    />
                </FormItem>
                <FormItem>
                    <FormLabel htmlFor='firstName' required>
                        First Name:
                    </FormLabel>
                    <FormInput
                        id='firstName'
                        value={user.firstName}
                        name='firstName'
                        disabled={mode==='display'}
                    />
                </FormItem>
                <FormItem>
                    <FormLabel htmlFor='lastName' required>
                        Last Name:
                    </FormLabel>
                    <FormInput
                        id='lastName'
                        value={user.lastName}
                        name='lastName'
                        disabled={mode==='display'}
                    />
                </FormItem>
                <FormItem>
                    <FormLabel htmlFor='email' required>
                        eMail:
                    </FormLabel>
                    <FormInput
                        id='email'
                        value={user.email}
                        name='email'
                        disabled={mode==='display'}
                    />
                </FormItem>
            </FormGroup>
        </div>
    );
}