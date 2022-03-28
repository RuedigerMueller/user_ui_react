import axios from "axios";
import { Dispatch } from "redux";
import { User } from "../../type";
import { UsersAction, UsersActionType } from "../actionTypes/usersActionTypes";

export const createUser = (accessToken: string, user: User) => {
  return async (dispatch: Dispatch<UsersAction>) => {
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

      dispatch({
        type: UsersActionType.USERS_CREATE_SUCCESS,
        user: data.user,
      });
      console.log("Before addUser", data.user);
    } catch (err) {
      console.log("error");
      dispatch({
        type: UsersActionType.USERS_CREATE_FAIL,
        errorMessage: "Error",
      });
    }
  };
};

export const readUsers = (accessToken: string) => {
  return async (dispatch: Dispatch<UsersAction>) => {
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
      dispatch({
        type: UsersActionType.USERS_READ_SUCCESS,
        users: data,
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

export const updateUser = (accessToken: string, user: User) => {
  return async (dispatch: Dispatch<UsersAction>) => {
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
      console.log("error");
      dispatch({
        type: UsersActionType.USERS_UPDATE_FAIL,
        errorMessage: "Error",
      });
    }
  };
};

export const deleteUser = (userID: number, accessToken: string) => {
  return async (dispatch: Dispatch<UsersAction>) => {
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
      console.log("Deleted from backend");
      dispatch({
        type: UsersActionType.USERS_DELETE_SUCCESS,
      });
      //deleteUserFromUserList(data.user);
    } catch (err) {
      console.log("error");
      dispatch({
        type: UsersActionType.USERS_DELETE_FAIL,
        errorMessage: "Error",
      });
    }
  };
};
