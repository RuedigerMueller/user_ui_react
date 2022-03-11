import React, { ReactNode } from 'react';
import axios from "axios";

type Props = {};

const initialState = Object.freeze({
    username: 'Admin',
    password: 'changeme',
});

type State = typeof initialState;

const baseURL = "http://localhost:3001/login";

export class Login extends React.Component<Props, State> {
    readonly state = initialState;

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.name);
        console.log(event.target.value);      
        switch(event.target.name) {
            case 'password': {
                this.setState({
                    password: event.target.value,
                });
                break;
            }
            case 'username': {
                this.setState({
                    username: event.target.value,
                });
                break
            }
            default: {
                console.log('unexpected field updated');
                break;
            }
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
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    public render(): ReactNode {
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