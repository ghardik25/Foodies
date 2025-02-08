import SignUpForm from "../components/SignUpForm";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { TimerContext } from "../context/TimerContext";

const BASE_URL = process.env.VITE_APP_API_URL;

export default function Signup() {
  const [userinfo, setuserinfo] = useState({
    name: "",
    rollNo: "",
    branch: "",
    question: "",
    answer: "",
    role: "user",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { saveToken } = useContext(AuthContext);
  const { newTimer } = useContext(TimerContext);

  const handleInput = (event) => {
    const targetName = event.target.name;
    const value = event.target.value;

    setuserinfo({ ...userinfo, [targetName]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("Started Signing up");

      const response = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userinfo),
      });

      const res = await response.json();
      console.log("Response from backend:", res); // Debugging

      if (res.valid === 0) {
        const data = { token: res.token, email: userinfo.email, role: res.role };
        saveToken(data);
        console.log("Saved token Successfully");
        navigate("/user");
        newTimer(300);
      } else {
        console.log("User already exists. Redirecting to login...");
        alert("User Already Exists, Please Login");
        navigate("/login");
      }
    } catch (error) {
      console.error(`${error} in handleSubmit`);
    }
  };

  return (
    <SignUpForm
      userinfo={userinfo}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
    ></SignUpForm>
  );
}
