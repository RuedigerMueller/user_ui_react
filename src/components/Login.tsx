import { Button, FormGroup, FormInput, FormItem, FormLabel } from 'fundamental-react';
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { displayUserList } from '../store/actionCreators/canvasActionCreator';
import { login } from '../store/actionCreators/loginActionCreator';


export const Login: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: ''
    });


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setLoginInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            loginUser();
        }
    }

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        loginUser();
    }

    const loginUser = async () => {
        await dispatch(login(loginInfo));
        dispatch(displayUserList());
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
                        value={loginInfo.username}
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
                        value={loginInfo.password}
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