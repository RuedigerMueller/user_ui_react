import { ActionBar, Button } from "fundamental-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { Dispatch } from "redux";
import { selectUser } from "../redux/actionCreators/userActionCreator";
import { initialUser } from "../redux/reducers/userReducer";

export const UserTableActionBar: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const [redirectToUserDetails, setRedirectToUserDetails] = useState(false);

  const handleCreate = () => {
    dispatch(selectUser(initialUser, "create"));
    setRedirectToUserDetails(() => true);
  };

  return (
    <div
      className="userActions"
      style={{
        textAlign: "start",
      }}
    >
      {redirectToUserDetails && <Navigate to="/user" />}
      <ActionBar
        title={"Users"}
        description={"Manage application users"}
        actions={<Button onClick={() => handleCreate()}>Create</Button>}
      />
    </div>
  );
};
