import { Select, Table } from "fundamental-react";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Dispatch } from "redux";
import {
  deleteUser,
  readUsers,
} from "../redux/actionCreators/usersActionCreator";

import { useTypedSelector } from "../redux/useTypeSelector";
import { Options, User } from "../type";

export const UsersTable: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const [redirectToUserDetails, setRedirectToUserDetails] = useState(false);
  const [userID, setUserID] = useState(-1);
  const { users } = useTypedSelector((state) => state.users);
  const { accessToken } = useTypedSelector((state) => state.login);

  const onSelect = (event: SyntheticEvent, selectedOption: Options): void => {
    //ToDo: feels like a hack - there must be a better way to provide the row context
    const dashPosition: number = selectedOption.key.indexOf("-");
    const userID: number = parseInt(
      selectedOption.key.substring(0, dashPosition)
    );
    const action: number = parseInt(
      selectedOption.key.substring(dashPosition + 1, selectedOption.key.length)
    );

    switch (action) {
      case 1: {
        console.log("edit");
        const user: User | undefined = users.find((user) => user.id === userID);
        if (user) {
          setUserID(user.id);
          setRedirectToUserDetails(() => true);
        } else {
          console.log("user not found");
        }
        break;
      }
      case 2: {
        console.log("delete");
        dispatch(deleteUser(userID));
        break;
      }
      case 3: {
        console.log("assign roles");
        //this.props.handleCanvasContentUpdate(screenActions.assignRoles);
        break;
      }
      default: {
        console.log("surprise");
        break;
      }
    }
  };

  useEffect(() => {
    dispatch(readUsers());
  }, [dispatch, accessToken]);

  let navigate = useNavigate();

  return (
    <div className="userlist">
      {redirectToUserDetails && navigate(`../user/${userID}`)}
      <Table
        headers={[
          "ID",
          "Username",
          "First Name",
          "Last Name",
          "Email",
          "Actions",
        ]}
        tableData={users.map((user: User) => {
          return {
            rowData: [
              user.id,
              user.username,
              user.firstName,
              user.lastName,
              user.email,
              <>
                <Select
                  key={user.id}
                  id={user.id.toString()}
                  aria-label="Primary"
                  options={[
                    { key: `${user.id}-1`, text: "Edit" },
                    { key: `${user.id}-2`, text: "Delete" },
                    { key: `${user.id}-3`, text: "Assign Roles" },
                  ]}
                  placeholder="Select"
                  selectedKey={user.id.toString() + "-1"}
                  onSelect={onSelect}
                />
              </>,
            ],
          };
        })}
      />
    </div>
  );
};
