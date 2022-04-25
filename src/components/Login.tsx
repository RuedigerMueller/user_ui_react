import {
  Button,
  FormGroup,
  FormInput,
  FormItem,
  FormLabel,
} from "fundamental-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router";
import { Dispatch } from "redux";
import { login } from "../redux/actionCreators/loginActionCreator";
import { useTypedSelector } from "../redux/useTypeSelector";

export const Login: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { accessToken } = useTypedSelector((state) => state.login);
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      loginUser();
    }
  };

  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    loginUser();
  };

  const loginUser = () => {
    dispatch(login(loginInfo));
  };

  return (
    <div
      className="login"
      style={{
        width: "20em",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {accessToken !== "" && <Navigate to="/users" />}
      <FormGroup>
        <FormItem>
          <FormLabel htmlFor="username" required>
            Username:
          </FormLabel>
          <FormInput
            id="username"
            value={loginInfo.username}
            name="username"
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="password" required>
            Password:
          </FormLabel>
          <FormInput
            type="password"
            id="password"
            value={loginInfo.password}
            name="password"
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
        </FormItem>
        <p></p>
        <FormItem>
          <Button
            option="emphasized"
            selected={true}
            onClick={handleButtonClick}
          >
            Login
          </Button>
        </FormItem>
      </FormGroup>
    </div>
  );
};
