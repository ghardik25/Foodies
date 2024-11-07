import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import ViewNavbar from "../../UsersTypes/View/ViewNavbar";
import Menu from "../../pages/Menu";
import Signup from "../../pages/Signup";
import Login from "../../pages/Login";


function ViewApp() {
  return (
    <>
        <ViewNavbar />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>    
        </Routes>
    </>
  );
}

export default ViewApp;