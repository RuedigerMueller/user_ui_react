import { Button, FormGroup, FormInput, FormItem, FormLabel } from 'fundamental-react';
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { login } from '../store/actionCreators/loginActionCreator';
import { ILoginInfo } from '../type';


export const Login: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const key = event.target.name;
        if (key === 'username') {
            setUserName(event.target.value);
        }
        if (key === 'password') {
            setPassword(event.target.value);
        }
    }

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            loginUser();
        }
    }

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        loginUser();
    }

    const loginUser = async() => {
        const loginInfo: ILoginInfo = {
            username: userName,
            password: password
        }
        await dispatch(login(loginInfo));
    }

    return (
        <div className='login'
            style={{
                width: '20em',
                marginLeft: 'auto',
                marginRight: 'auto',
            }}>
            <FormGroup>
                <FormItem>
                    <FormLabel htmlFor='username' required>
                        Username:
                    </FormLabel>
                    <FormInput
                        id='username'
                        value={userName}
                        name='username'
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                    />
                </FormItem>
                <FormItem>
                    <FormLabel htmlFor='password' required>
                        Password:
                    </FormLabel>
                    <FormInput
                        type='password'
                        id='password'
                        value={password}
                        name='password'
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                    />
                </FormItem>
                <p></p>
                <FormItem>
                    <Button
                        option='emphasized'
                        selected={true}
                        onClick={handleButtonClick}
                    >
                        Login
                    </Button>
                </FormItem>
            </FormGroup>
        </div>
    );
}