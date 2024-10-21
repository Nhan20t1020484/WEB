import { Navigate, Route, Routes } from "react-router-dom";
import { Main } from "./components/products/partial/Main";
import { List } from "./components/products/components1/List";
import { Add } from "./components/products/components1/Add";
import { Edit } from "./components/products/components1/Edit";
import { Login } from "../src/components/urses/Login";
import { Register } from "../src/components/urses/Register";
import { useContext, useEffect, useState } from "react";
import { InfoContext, InfoProvider } from "./components/context/InfoContext";


function App() {
  // const token = localStorage.getItem("token"); // lay ngay khi chay chuong trinh => đăng nhập xong token mới sinh ra
  // => null
  // user

  const { user } = useContext(InfoContext);
  console.log("App.user", user);
  return (
    <>
      <Routes>
        {
          user ? <>
            <Route element={<Main />} path="">
              <Route element={<List />} path="home" />
              <Route element={<Add />} path="add" />
              <Route element={<Edit />} path="edit/:id" />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Route>
          </> :
            <>
              <Route element={<Login />} path="login" />
              <Route element={<Register />} path="register" />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </>
        }

      </Routes>
    </>
  );
}

export default App;