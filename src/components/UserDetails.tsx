import {
  Button,
  FormGroup,
  FormInput,
  FormItem,
  FormLabel,
} from "fundamental-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { displayUserList } from "../redux/actionCreators/canvasActionCreator";
import {
  createUser,
  updateUser,
} from "../redux/actionCreators/usersActionCreator";
/* import {
  createUser,
  updateUser,
} from "../redux/actionCreators/userActionCreator"; */
import { useTypedSelector } from "../redux/useTypeSelector";
import { User } from "../type";

export const UserDetails: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  // const { user } = useTypedSelector((state) => state.user);
  // const { mode } = useTypedSelector((state) => state.user);
  const { accessToken } = useTypedSelector((state) => state.login);
  const { users } = useTypedSelector((state) => state.users);
  const [localUser, setLocalUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const buttonTextUpdate: string = "Update";
  const buttonTextCreate: string = "Create";
  const buttonTextClose: string = "Close";

  let buttonText: string = "";
  const mode: string = "edit";
  switch (mode) {
    case "edit": {
      buttonText = buttonTextUpdate;
      break;
    }
    case "display": {
      buttonText = buttonTextClose;
      break;
    }
    case "create": {
      buttonText = buttonTextCreate;
      break;
    }
    default:
      console.log("Unexpected mode");
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLocalUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      next("cancel");
    }
  };

  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const button: HTMLButtonElement = event.target as HTMLButtonElement;
    next(button.innerText);
  };

  const next = async (action: string) => {
    switch (action) {
      case buttonTextCreate: {
        /* const newUser: User = {
          ...user,
          ...localUser,
        };
        dispatch(createUser(accessToken, newUser)); */
        break;
      }
      case buttonTextUpdate: {
        /* const newUser: User = {
          ...user,
          ...localUser,
        };
        dispatch(updateUser(accessToken, newUser)); */
        break;
      }
      case buttonTextClose: {
        break;
      }
      default:
        console.log("Unexpected action");
    }
    dispatch(displayUserList());
  };

  return (
    <div className="userDetails">
      <FormGroup>
        <FormItem>
          <FormLabel htmlFor="username" required>
            Username:
          </FormLabel>
          <FormInput
            id="username"
            value={localUser.username}
            name="username"
            disabled={mode === "display" || mode === "edit"}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="firstName" required>
            First Name:
          </FormLabel>
          <FormInput
            id="firstName"
            value={localUser.firstName}
            name="firstName"
            disabled={mode === "display"}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="lastName" required>
            Last Name:
          </FormLabel>
          <FormInput
            id="lastName"
            value={localUser.lastName}
            name="lastName"
            disabled={mode === "display"}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="email" required>
            eMail:
          </FormLabel>
          <FormInput
            id="email"
            value={localUser.email}
            name="email"
            disabled={mode === "display"}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
        </FormItem>
        <FormItem isHorizontal={true}>
          <Button
            id="continue"
            option="emphasized"
            selected={true}
            onClick={handleButtonClick}
          >
            {buttonText}
          </Button>
          &nbsp;
          <Button
            id="cancel"
            hidden={mode === "display"}
            selected={true}
            onClick={handleButtonClick}
          >
            Cancel
          </Button>
        </FormItem>
      </FormGroup>
    </div>
  );
};
