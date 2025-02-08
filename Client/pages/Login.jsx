import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { TimerContext } from "../context/TimerContext";

export default function Login() {
  const [userinfo, setuserinfo] = useState({
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
      console.log("Started Login");

      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userinfo),
      });

      const res = await response.json();
      console.log("Response from backend:", res); // Debugging

      console.log("Verification Started");

      if (res.valid === -1) {
        const data = { token: res.token, email: userinfo.email, role: res.role };
        saveToken(data);
        newTimer(300);

        console.log("Navigating user based on role...");
        if (res.role === "admin") {
          navigate("/admin");
        } else if (res.role === "canteen") {
          navigate("/canteen");
        } else {
          navigate("/user");
        }
      } else if (res.valid === 1) {
        alert("Invalid Email or Password");
      } else {
        alert("No User Found, Please Sign-up");
        navigate("/signup");
      }
      console.log("Verification Ended");
    } catch (error) {
      console.error(`${error} in handleSubmit`);
    }
  };

  return (
    <LoginForm
      userinfo={userinfo}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
    ></LoginForm>
  );
}
