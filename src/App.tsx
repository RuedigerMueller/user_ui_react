import axios from "axios";
import { Shellbar } from "fundamental-react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login";
import { PageNotFound } from "./components/PageNotFound";
import UserDetails from "./components/UserDetails";

import { UserList } from "./components/UserList";

axios.defaults.baseURL = "http://localhost:3001/";

export const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Shellbar logoSAP={true} productTitle="User UI - React" />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userID" element={<UserDetails />} />
          <Route path="/user" element={<UserDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
