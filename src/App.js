import { Navigate, Route, Routes } from "react-router-dom";
import { Main } from "./components/products/partial/Main";
import { List } from "./components/products/components1/List";
import { Add } from "./components/products/components1/Add";
import { Edit } from "./components/products/components1/Edit";
import { Login } from "./components/urses/Login";
import { Register } from "./components/urses/Register";
import { useEffect, useState } from "react";


function App() {
  const token = localStorage.getItem("token"); // null
  return (
    <>

      <Routes>
        {
          token ? <>
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