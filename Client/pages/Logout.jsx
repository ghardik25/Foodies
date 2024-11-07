import { Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Logout() {
  const { deleteToken } = useContext(AuthContext);
  useEffect(() => {
    deleteToken();
  }, [deleteToken]);

  return <Navigate to="/"></Navigate>;
}