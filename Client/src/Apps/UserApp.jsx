import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Cart from "../../pages/Cart";
import Logout from "../../pages/Logout";
import UserNavbar from "../../UsersTypes/User/UserNavbar";
import Menu from "../../pages/Menu";
import UserFeedback from "../../UsersTypes/User/UserFeedback";
import AddFeedback from "../../pages/AddFeedback";
import DeleteFeedback from "../../pages/DeleteFeedback";


function UserApp() {
  return (
    <>
        <UserNavbar />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/feedback" element={<UserFeedback />}></Route>
            <Route path="/addfeedback" element={<AddFeedback />}></Route>
            <Route path="/deletefeedback" element={<DeleteFeedback />}></Route>
            <Route path="/logout" element={<Logout />}></Route>  
        </Routes>
    </>
  );
}

export default UserApp;