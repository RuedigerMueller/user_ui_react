import axios from "axios";
import { Button, FormGroup, FormInput, FormItem, FormLabel } from "fundamental-react";
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

const baseURL = "http://localhost:3001/login";

export class Login extends React.Component<Props, State> {
    readonly state = initialState;

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.name);
        console.log(event.target.value);

        const key = event.target.name;
        if (Object.keys(this.state).includes(key)) {
            this.setState({
                [key]: event.target.value
            } as Pick<State, keyof State>);
        }
    }

    login = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        var config = {
            headers: {
                "Content-Type": "application/json",
            }
        };

        axios
            .post(
                baseURL,
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
                <div className="login"
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
                            />
                        </FormItem>
                        <p></p>
                        <FormItem>
                            <Button option='emphasized' onClick={this.login} >Login</Button>
                        </FormItem>
                    </FormGroup>
                </div>
        );
    }
}
