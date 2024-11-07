import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import UserNavbar from "../UsersTypes/User/UserNavbar";
import AdminNavbar from "../UsersTypes/Admin/AdminNavbar";
import NotFound from "./NotFound";
import CanteenApp from "../src/Apps/CanteenApp";

export default function NotAccessible() {
  const { authinfo } = useContext(AuthContext);
  return (
    <>
      {authinfo.role === "user" ? (
        <UserNavbar />
      ) : authinfo.role === "admin" ? (
        <AdminNavbar />
      ) : authinfo.role === "canteen" ? (
        <CanteenApp />
      ) : (
        <NotFound />
      )}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "620px",
        }}
      >
        <span
          className="m-1"
          style={{
            color: "orange",
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Not Accessible
        </span>
      </section>
    </>
  );
}
