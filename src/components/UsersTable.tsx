import { Button, Table } from "fundamental-react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Dispatch } from "redux";
import { selectUser } from "../redux/actionCreators/userActionCreator";
import {
  deleteUser,
  readUsers,
} from "../redux/actionCreators/usersActionCreator";
import { useTypedSelector } from "../redux/useTypeSelector";
import { User } from "../type";

export const UsersTable: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const [redirectToUserDetails, setRedirectToUserDetails] = useState(false);
  const { users } = useTypedSelector((state) => state.userList);

  useEffect(() => {
    dispatch(readUsers());
  }, [dispatch]);

  let navigate = useNavigate();

  const onEdit = (user: User): void => {
    dispatch(selectUser(user, "edit"));
    setRedirectToUserDetails(() => true);
  };

  const onDelete = (userID: number): void => {
    dispatch(deleteUser(userID));
  };

  return (
    <>
      {redirectToUserDetails && navigate(`../user`)}
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
                <Button
                  glyph="edit"
                  id={"edit-" + user.id.toString()}
                  onClick={(e) => onEdit(user)}
                ></Button>
                &nbsp;
                <Button
                  glyph="delete"
                  id={"delete-" + user.id.toString()}
                  onClick={(e) => onDelete(user.id)}
                ></Button>
              </>,
            ],
          };
        })}
      />
    </>
  );
};
