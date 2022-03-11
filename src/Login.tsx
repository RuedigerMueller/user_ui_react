import axios from "axios";
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

    login = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
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
                console.log(response.data);
                this.props.onLogin(response.data.access_token);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render(): ReactNode {
        return (
            <div className="login">
                <form onSubmit={this.login}>
                    <p>
                        <label htmlFor="user">User</label>
                        <input type="text" value={this.state.username} name="username" id="username" onChange={this.handleChange}></input>
                    </p>
                    <p>
                        <label htmlFor="password">Password</label>
                        <input type="password" value={this.state.password} name="password" id="password" onChange={this.handleChange}></input>
                    </p>
                    <p>
                        <input type="submit" value="Login" />
                    </p>
                </form>
            </div>
        );
    }
}