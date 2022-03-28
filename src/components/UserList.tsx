import React from "react";
import { UserTableActionBar } from "./UserListActionBar";
import { UsersTable } from "./UsersTable";

export const UserList: React.FC = () => {
  return (
    <div className="userList">
      <UserTableActionBar />
      <UsersTable />
    </div>
  );
};
