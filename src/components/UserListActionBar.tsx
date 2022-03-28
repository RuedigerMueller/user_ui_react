import { ActionBar, Button } from "fundamental-react";
import React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { displayUser } from "../redux/actionCreators/canvasActionCreator";
//import { setUserCreateMode } from "../redux/actionCreators/userActionCreator";

export const UserTableActionBar: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const handleCreate = () => {
    dispatch(displayUser());
    //dispatch(setUserCreateMode());
  };

  return (
    <div
      className="userActions"
      style={{
        textAlign: "start",
      }}
    >
      <ActionBar
        title={"Users"}
        description={"Manage application users"}
        actions={<Button onClick={() => handleCreate()}>Create</Button>}
      />
    </div>
  );
};
