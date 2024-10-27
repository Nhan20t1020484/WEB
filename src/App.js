import { Routes, Route, Navigate } from "react-router-dom";
import { Main } from "./components/products/partial/Main";
import { Login } from "../src/components/urses/Login";
import { Register } from "../src/components/urses/Register";
import { Listpost } from "../src/components/products/post/Listpost";
import { Addpost } from "../src/components/products/post/Addpost";
import { Editpost } from "../src/components/products/post/Editpost";
import { Searchpost } from "../src/components/products/post/Searchpost";
import { useContext } from "react";
import { InfoContext } from "./components/context/InfoContext";

function App() {
  const { user } = useContext(InfoContext);

  return (
    <Routes>
      {user ? (
        <Route path="/" element={<Main />}>
          <Route index element={<Listpost />} /> {/* Add default route */}
          <Route path="home" element={<Listpost />} />
          <Route path="addpost" element={<Addpost />} />
          <Route path="searchpost" element={<Searchpost />} />
          <Route path="edit/:id" element={<Editpost />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      ) : (
        <>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </>
      )}
    </Routes>
  );
}

export default App;
