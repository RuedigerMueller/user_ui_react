import { ActionBar, Button } from "fundamental-react";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export const UserTableActionBar: React.FC = () => {
  const [redirectToUserDetails, setRedirectToUserDetails] = useState(false);

  const handleCreate = () => {
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
