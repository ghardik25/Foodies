import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AdminDeleteUserForm from "../components/AdminDeleteUserForm";

export default function AdminDeleteUser() {
  const [userinfo, setuserinfo] = useState({
    email: ""
  });

  const navigate = useNavigate();

  const handleInput = (event) => {
    const targetName = event.target.name;
    const value = event.target.value;

    setuserinfo({
      ...userinfo,
      [targetName]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        console.log("Started Deleting user");
  
        // Req through fetch api
        const response = await fetch("http://localhost:3000/deleteuser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userinfo),
        });
        console.log("Deleted user Successfully");
  
        // Token generation
        const res = await response.json();
        // console.log(`Response recieved: ${JSON.stringify(res)}`);

        if(res.check === 'admin') {
            alert('Cannot delete admin');
        }
        else if(res.check === '0') {
            alert("User doesn't exist")
        }
        else {
            alert("Deleted Successfully!");
        }
        navigate('/admin/panel');

        // Setting form to default
        setuserinfo({email: ""});

      } catch (error) {
        console.log(`${error} in handleSubmit`);
      }
  };

  return (
    <AdminDeleteUserForm
      userinfo={userinfo}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
    />
  );
}
