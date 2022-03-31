import {
  Button,
  FormGroup,
  FormInput,
  FormItem,
  FormLabel,
} from "fundamental-react";
import React, { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import {
  createUser,
  updateUser,
} from "../redux/actionCreators/usersActionCreator";
import { AppState } from "../type";

const UserDetails: React.FC<UserProps> = ({
  createUser,
  updateUser,
  ...props
}: UserProps) => {
  const [user, setUser] = useState({ ...props.user });

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
    setUser((prevState) => ({
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
        createUser(user);
        break;
      }
      case buttonTextUpdate: {
        updateUser(user);
        break;
      }
      case buttonTextClose: {
        break;
      }
      default:
        console.log("Unexpected action");
    }
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
            value={user.username}
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
            value={user.firstName}
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
            value={user.lastName}
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
            value={user.email}
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

const mapStateToProps = (state: AppState) => ({
  user: state.user,
});

const mapDispatchToProps = {
  createUser,
  updateUser,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type UserProps = ConnectedProps<typeof connector>;

export default connector(UserDetails);
