import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Logout from "../../pages/Logout";
import Menu from "../../pages/Menu";
import AdminNavbar from "../../UsersTypes/Admin/AdminNavbar";
import AdminFeedback from "../../UsersTypes/Admin/AdminFeedback";
import AdminDeleteFeedback from "../../pages/AdminDeleteFeedback";
import AdminPanel from "../../UsersTypes/Admin/AdminPanel";


function AdminApp() {
  return (
    <>
        <AdminNavbar />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/panel" element={<AdminPanel />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/feedback" element={<AdminFeedback />}></Route>
            <Route path="/deletefeedback" element={<AdminDeleteFeedback />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
        </Routes>
    </>
  );
}

export default AdminApp;