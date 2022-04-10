import {
  Button,
  FormGroup,
  FormInput,
  FormItem,
  FormLabel,
} from "fundamental-react";
import React, { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  createUser,
  updateUser,
} from "../redux/actionCreators/usersActionCreator";
import { RootState } from "../redux/reducers/combine";
import { useTypedSelector } from "../redux/useTypeSelector";
import { User } from "../type";

const initialUser: User = {
  id: -1,
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
};

const UserDetails: React.FC<UserProps> = ({
  createUser,
  updateUser,
}: UserProps) => {
  const { userID } = useParams();
  const [user, setUser] = useState<User>(initialUser);
  const { users } = useTypedSelector((state) => state.userList);
  const navigate = useNavigate();

  const buttonTexts = {
    update: "Update",
    create: "Create",
    close: "Close",
    cancel: "Cancel",
  };

  enum componentMode {
    display,
    edit,
    create,
  }

  useEffect(() => {
    if (userID) {
      const user: User | undefined = users.find(
        (user) => user.id === parseInt(userID)
      );
      if (user) {
        setUser(user);
      }
    }
  }, [users, userID]);

  let buttonActionLabel: string = "";
  const mode: number =
    user.id !== -1 ? componentMode.edit : componentMode.create;

  switch (mode) {
    case componentMode.edit: {
      buttonActionLabel = buttonTexts.update;
      break;
    }
    case componentMode.display: {
      buttonActionLabel = buttonTexts.close;
      break;
    }
    case componentMode.create: {
      buttonActionLabel = buttonTexts.create;
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
    console.log(action);
    switch (action) {
      case buttonTexts.create: {
        createUser(user);
        navigate("../users");
        break;
      }
      case buttonTexts.update: {
        updateUser(user);
        navigate("../users");
        break;
      }
      case buttonTexts.close: {
        navigate("../users");
        break;
      }
      case buttonTexts.cancel: {
        navigate("../users");
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
            disabled={
              mode === componentMode.display || mode === componentMode.edit
            }
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
            disabled={mode === componentMode.display}
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
            disabled={mode === componentMode.display}
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
            disabled={mode === componentMode.display}
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
            {buttonActionLabel}
          </Button>
          &nbsp;
          <Button
            id="cancel"
            hidden={mode === componentMode.display}
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

const mapStateToProps = (state: RootState) => {
  return {};
};

const mapDispatchToProps = {
  createUser,
  updateUser,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type UserProps = ConnectedProps<typeof connector>;

export default connector(UserDetails);
