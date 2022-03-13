import axios from 'axios';
import { Button, FormGroup, FormInput, FormItem, FormLabel } from 'fundamental-react';
import React, { ReactNode } from 'react';

const defaultProps = Object.freeze({
    onLogin: (accessToken: string): void => { },
});
type Props = typeof defaultProps;

const initialState = Object.freeze({
    username: '',
    password: '',
});
type State = typeof initialState;

export class Login extends React.Component<Props, State> {
    readonly state = initialState;

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const key = event.target.name;
        if (Object.keys(this.state).includes(key)) {
            this.setState({
                [key]: event.target.value
            } as Pick<State, keyof State>);
        }
    }

    handleKeyPress = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter'){
            this.login();
          }
    }

    handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        this.login();
    }

    login = () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        };

        axios
            .post(
                'login',
                {
                    username: this.state.username,
                    password: this.state.password,
                },
                config)
            .then(response => {
                this.props.onLogin(response.data.access_token);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render(): ReactNode {
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
                                value={this.state.username}
                                name='username'
                                onChange={this.handleChange}
                                onKeyPress={this.handleKeyPress}
                            />
                        </FormItem>
                        <FormItem>
                            <FormLabel htmlFor='password' required>
                                Password:
                            </FormLabel>
                            <FormInput
                                type='password'
                                id='password'
                                value={this.state.password}
                                name='password'
                                onChange={this.handleChange}
                                onKeyPress={this.handleKeyPress}
                            />
                        </FormItem>
                        <p></p>
                        <FormItem>
                            <Button option='emphasized' selected={true} onClick={this.handleButtonClick} >Login</Button>
                        </FormItem>
                    </FormGroup>
                </div>
        );
    }
}
