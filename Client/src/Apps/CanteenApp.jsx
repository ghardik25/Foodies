import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Logout from "../../pages/Logout";
import Feedback from "../../pages/Feedback";
import Orders from "../../pages/Orders";
import CanteenNavbar from "../../UsersTypes/Canteen/CanteenNavbar";
import AddItem from "../../pages/AddItem";
import CanteenMenu from "../../UsersTypes/Canteen/CanteenMenu";
import DeleteItem from "../../pages/DeleteItem";


function CanteenApp() {
  return (
    <>
        <CanteenNavbar />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/menu" element={<CanteenMenu />}></Route>
            <Route path="/additem" element={<AddItem />}></Route>
            <Route path="/deleteitem" element={<DeleteItem />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
            <Route path="/feedback" element={<Feedback />}></Route>
            <Route path="/logout" element={<Logout />}></Route>  
        </Routes>
    </>
  );
}

export default CanteenApp;
