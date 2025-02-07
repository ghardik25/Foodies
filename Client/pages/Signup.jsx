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

      // Req through fetch api
      const response = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userinfo),
      });
      console.log("Signed Up Successfully");

      // Token generation
      const res = await response.json();
      // console.log(`Response recieved: ${JSON.stringify(res)}`);
      
      if(res.valid === 0) {
        const data = { token: res.token, email: userinfo.email, role: res.role };
  
        // Saving token
        saveToken(data);
        console.log("Saved token Successfully");
        navigate("/user");

        // Setting a new timer
        // setTimeout(deleteToken, 300*1000);
        newTimer(300);
      }
      else {
        alert('User Already Exists, Please Login');
        navigate('/login');
      }
    } catch (error) {
      console.log(`${error} in handleSubmit`);
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
