import {
  Button,
  FormGroup,
  FormInput,
  FormItem,
  FormLabel,
} from "fundamental-react";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import {
  createUser,
  updateUser,
} from "../redux/actionCreators/usersActionCreator";
import { RootState } from "../redux/reducers/combine";

const UserDetails: React.FC<UserProps> = ({
  user,
  mode,
  createUser,
  updateUser,
}: UserProps) => {
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
            //onChange={handleChange}
            //onKeyPress={handleKeyPress}
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
            //onChange={handleChange}
            //onKeyPress={handleKeyPress}
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
            // onChange={handleChange}
            // onKeyPress={handleKeyPress}
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
            // onChange={handleChange}
            // onKeyPress={handleKeyPress}
          />
        </FormItem>
        <FormItem isHorizontal={true}>
          <Button
            id="continue"
            option="emphasized"
            selected={true}
            //onClick={handleButtonClick}
          >
            'ACTION'
          </Button>
          &nbsp;
          <Button
            id="cancel"
            disabled={mode === "display"}
            selected={true}
            //onClick={handleButtonClick}
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
    mode: state.user.mode,
    user: state.user.user,
  };
};

const mapDispatchToProps = {
  createUser,
  updateUser,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type UserProps = ConnectedProps<typeof connector>;

export default connector(UserDetails);
