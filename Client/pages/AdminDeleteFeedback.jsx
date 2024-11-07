import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { InsertDeleteContext } from "../context/InsertDeleteContext";
import AdminDeleteFeedbackForm from "../components/AdminDeleteFeedbackForm";

export default function AdminDeleteFeedback() {
  const [userinfo, setuserinfo] = useState({
    dishName: "",
    email: ""
  });

  const navigate = useNavigate();
  const { deletion } = useContext(InsertDeleteContext);

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
      console.log("Started Deleting feedback");
      await deletion(userinfo, "feedback");
      console.log("Deleted feedback Successfully");
      navigate("/admin/feedback");
    } catch (error) {
      console.log(`${error} in handleSubmit in feedback deletion (admin side)`);
    }
  };

  return (
    <AdminDeleteFeedbackForm
      userinfo={userinfo}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
    />
  );
}
