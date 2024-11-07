import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { InsertDeleteContext } from "../context/InsertDeleteContext";
import { AuthContext } from "../context/AuthContext";
import DeleteFeedbackForm from "../components/DeleteFeedbackForm";

export default function DeleteFeedback() {
  const [userinfo, setuserinfo] = useState({
    dishName: "",
  });

  const navigate = useNavigate();
  const { deletion } = useContext(InsertDeleteContext);
  const { authinfo } = useContext(AuthContext);


  const handleInput = (event) => {
    const targetName = event.target.name;
    const value = event.target.value;

    setuserinfo({
      ...userinfo,
      [targetName]: value,
      email: authinfo.email
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("Started Deleting feedback");
      await deletion(userinfo, "feedback");
      console.log("Deleted feedback Successfully");
      navigate("/user/feedback");
    } catch (error) {
      console.log(`${error} in handleSubmit in feedback deletion`);
    }
  };

  return (
    <DeleteFeedbackForm
      userinfo={userinfo}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
    />
  );
}
