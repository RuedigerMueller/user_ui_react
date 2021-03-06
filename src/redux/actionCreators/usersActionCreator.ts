import axios from "axios";
import { Dispatch } from "redux";
import { User } from "../../type";
import { UsersActions, UsersActionType } from "../actionTypes/usersActionTypes";
import { RootState } from "../reducers/combine";

export const createUser = (user: User) => {
  return async (
    dispatch: Dispatch<UsersActions>,
    getState: () => RootState
  ) => {
    const state: RootState = getState();
    const accessToken: string = state.login.accessToken;
    dispatch({
      type: UsersActionType.USERS_CREATE_PENDING,
    });

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const { data } = await axios.post(
        `users`,
        {
          username: user.username,
          password: "changeme",
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
        config
      );

      if (user.isAdmin) {
        await axios.post(`users/${data.id}/addRole/admin`, {}, config);
      }

      dispatch({
        type: UsersActionType.USERS_CREATE_SUCCESS,
        user: data,
      });
    } catch (err) {
      console.log("error", err);
      dispatch({
        type: UsersActionType.USERS_CREATE_FAIL,
        errorMessage: "Error",
      });
    }
  };
};

export const readUsers = () => {
  return async (
    dispatch: Dispatch<UsersActions>,
    getState: () => RootState
  ) => {
    const state: RootState = getState();
    const accessToken: string = state.login.accessToken;
    dispatch({
      type: UsersActionType.USERS_READ_PENDING,
    });

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const { data } = await axios.get("users", config);
      const users: Array<User> = data.map((backend_user: any) => {
        const user: User = { ...backend_user };
        user.isAdmin = backend_user.roles.includes("admin");
        return user;
      });
      dispatch({
        type: UsersActionType.USERS_READ_SUCCESS,
        users: users,
      });
    } catch (err) {
      console.log("error");
      dispatch({
        type: UsersActionType.USERS_READ_FAIL,
        errorMessage: "Error",
      });
    }
  };
};

export const updateUser = (user: User) => {
  return async (
    dispatch: Dispatch<UsersActions>,
    getState: () => RootState
  ) => {
    const state: RootState = getState();
    const accessToken: string = state.login.accessToken;
    dispatch({
      type: UsersActionType.USERS_UPDATE_PENDING,
    });

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };

      if (user.isAdmin) {
        await axios.post(`users/${user.id}/addRole/admin`, {}, config);
      } else {
        await axios.post(`users/${user.id}/removeRole/admin`, {}, config);
      }

      const { data } = await axios.patch(
        `users/${user.id}`,
        {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
        config
      );

      dispatch({
        type: UsersActionType.USERS_UPDATE_SUCCESS,
        user: data.user,
      });
    } catch (err) {
      console.log("error", err);
      dispatch({
        type: UsersActionType.USERS_UPDATE_FAIL,
        errorMessage: "Error",
      });
    }
  };
};

export const deleteUser = (userID: number) => {
  return async (
    dispatch: Dispatch<UsersActions>,
    getState: () => RootState
  ) => {
    const state: RootState = getState();
    const accessToken: string = state.login.accessToken;
    dispatch({
      type: UsersActionType.USERS_DELETE_PENDING,
    });

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };
      console.log("Deleting from backend");
      const { data } = await axios.delete(`users/${userID}`, config);
      console.log("Deleted from backend", data);
      dispatch({
        type: UsersActionType.USERS_DELETE_SUCCESS,
        userID: userID,
      });
    } catch (err) {
      console.log("error");
      dispatch({
        type: UsersActionType.USERS_DELETE_FAIL,
        errorMessage: "Error",
      });
    }
  };
};
