import {
  Button,
  FormGroup,
  FormInput,
  FormItem,
  FormLabel,
} from "fundamental-react";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateSelectedUser } from "../redux/actionCreators/userActionCreator";
import {
  createUser,
  updateUser,
} from "../redux/actionCreators/usersActionCreator";
import { RootState } from "../redux/reducers/combine";

const UserDetails: React.FC<UserProps> = ({
  user,
  mode,
  updateSelectedUser,
  updateUser,
  createUser,
}: UserProps) => {
  const navigate = useNavigate();

  type Actions = ["Update", "Close", "Create", "Cancel"];
  type Action = Actions[number];

  const modeToActionLabelMap: { [id: string]: Action } = {
    edit: "Update",
    display: "Close",
    create: "Create",
  };
  const actionButtonLabel: string = modeToActionLabelMap[mode];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    updateSelectedUser(name, value);
  };

  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const button: HTMLButtonElement = event.target as HTMLButtonElement;
    const action: Action = button.innerText as Action;
    switch (action) {
      case "Update": {
        updateUser(user);
        break;
      }
      case "Create": {
        createUser(user);
        break;
      }
      case "Close": {
        break;
      }
      case "Cancel": {
        break;
      }
      default: {
        console.log("Unexpected action");
      }
    }
    navigate("../users");
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
          />
        </FormItem>
        <FormItem isHorizontal={true}>
          <Button
            id="continue"
            option="emphasized"
            selected={true}
            onClick={handleButtonClick}
          >
            {actionButtonLabel}
          </Button>
          &nbsp;
          <Button
            id="cancel"
            disabled={mode === "display"}
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
  return {
    mode: state.userDetails.mode,
    user: state.userDetails.user,
  };
};

const mapDispatchToProps = {
  updateSelectedUser,
  updateUser,
  createUser,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type UserProps = ConnectedProps<typeof connector>;

export default connector(UserDetails);
