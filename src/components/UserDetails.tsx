import { Button, FormGroup, FormInput, FormItem, FormLabel } from 'fundamental-react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { displayUserList } from '../store/actionCreators/canvasActionCreator';
import { useTypedSelector } from '../store/useTypeSelector';
import { User } from '../type';

export const UserDetails: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const { user } = useTypedSelector((state) => state.user);
    const { mode } = useTypedSelector((state) => state.user);
    const [localUser, setLocalUser] = useState({ 
        username: user.username, 
        firstName: user.firstName,
        lastName: user.lastName,
        eMail: user.email 
    });

    const buttonTextUpdate: string = 'Update';
    const buttonTextCreate: string = 'Create';
    const buttonTextClose: string = 'Close';

    let buttonText: string = '';
    switch(mode) {
        case 'edit': {
            buttonText = buttonTextUpdate;
            break;
        }
        case 'display': {
            buttonText = buttonTextClose;
            break;
        }
        case 'create': {
            buttonText = buttonTextCreate;
            break;
        }
        default:
            console.log('Unexpected mode');
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setLocalUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            next('cancel');
        }
    }

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const button: HTMLButtonElement = event.target as HTMLButtonElement;
        console.log(button.innerText);
        next(button.innerText);
    }

    const next = async (action: string) => {
        console.log(action);
        switch (action) {
            case buttonTextCreate: {
                const createUser: User = {
                    ...user,
                    ...localUser,
                };
                console.log(createUser);
                //displatch(createUser(createUser));
                break;
            }
            case buttonTextUpdate: {
                const updateUser: User = {
                    ...user,
                    ...localUser,
                };
                console.log(updateUser);
                //displatch(updateUser(updateUser));
                break;
            }
            case buttonTextClose: {
                break;
            }
            default:
                console.log('Unexpected action');
        }

        // await dispatch(login(loginInfo));
        dispatch(displayUserList());
    }

    return (
        <div className='userDetails'>
            <FormGroup>
                <FormItem>
                    <FormLabel htmlFor='username' required>
                        Username:
                    </FormLabel>
                    <FormInput
                        id='username'
                        value={localUser.username}
                        name='username'
                        disabled={mode === 'display' || mode === 'edit'}
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                    />
                </FormItem>
                <FormItem>
                    <FormLabel htmlFor='firstName' required>
                        First Name:
                    </FormLabel>
                    <FormInput
                        id='firstName'
                        value={localUser.firstName}
                        name='firstName'
                        disabled={mode === 'display'}
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                    />
                </FormItem>
                <FormItem>
                    <FormLabel htmlFor='lastName' required>
                        Last Name:
                    </FormLabel>
                    <FormInput
                        id='lastName'
                        value={localUser.lastName}
                        name='lastName'
                        disabled={mode === 'display'}
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                    />
                </FormItem>
                <FormItem>
                    <FormLabel htmlFor='eMail' required>
                        eMail:
                    </FormLabel>
                    <FormInput
                        id='eMail'
                        value={localUser.eMail}
                        name='eMail'
                        disabled={mode === 'display'}
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                    />
                </FormItem>
                <FormItem isHorizontal={true}>  
                    <Button
                        id='continue'
                        option='emphasized'
                        selected={true}
                        onClick={handleButtonClick}
                    >
                        {buttonText}
                    </Button>
                    &nbsp;
                    <Button
                        id='cancel'
                        hidden={mode==='display'}
                        selected={true}
                        onClick={handleButtonClick}
                    >
                        Cancel
                    </Button>
                </FormItem>
            </FormGroup>
        </div>
    );
}