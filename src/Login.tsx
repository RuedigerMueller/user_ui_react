import React, { ReactNode } from 'react';

type Props = {};
type State = {};

export class Login extends React.Component<Props, State> {
    private login() {
        alert('Login');
    }

    public render(): ReactNode {
        return (
            <div className="login">
                <form onSubmit={this.login}>
                    <p>
                        <label htmlFor="user">User</label>
                        <input type="text" name="user" id="user"></input>
                    </p>
                    <p>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password"></input>
                    </p>
                    <p>
                        <input type="submit" value="Login"/>
                    </p>
                </form>
            </div>
        );
    }
}