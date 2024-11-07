import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AdminAddCanteenForm from "../components/AdminAddCanteenForm";

export default function AdminAddCanteen() {
  const [userinfo, setuserinfo] = useState({
    name: "",
    question: "",
    answer: "",
    role: "canteen",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (event) => {
    const targetName = event.target.name;
    const value = event.target.value;

    setuserinfo({ ...userinfo, [targetName]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("Started canteen registration up");

      // Req through fetch api
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userinfo),
      });
      console.log("Canteen registered Successfully");

      const res = await response.json();

      if (res.valid === 0) {
        alert("Added Canteen Person");
      } else {
        alert("Already Exists");
      }
      navigate("/admin/panel");

      // Setting form to default again
      setuserinfo({
        name: "",
        question: "",
        answer: "",
        role: "canteen",
        email: "",
        password: ""
      });
      
    } catch (error) {
      console.log(`${error} in handleSubmit (AdminAddCanteen)`);
    }
  };

  return (
    <AdminAddCanteenForm
      userinfo={userinfo}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
    />
  );
}
