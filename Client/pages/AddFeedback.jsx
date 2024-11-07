import AddFeedbackForm from "../components/AddFeedbackForm";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { InsertDeleteContext } from "../context/InsertDeleteContext";
import { AuthContext } from "../context/AuthContext";

export default function AddFeedback() {
  const [userinfo, setuserinfo] = useState({
    dishName: "",
    rating: "",
    comment: "",
  });

  const navigate = useNavigate();
  const { insertion } = useContext(InsertDeleteContext);
  const { authinfo } = useContext(AuthContext);


  const handleInput = (event) => {
    const targetName = event.target.name;
    const value = event.target.value;

    setuserinfo({
      ...userinfo,
      [targetName]: value,
      username: authinfo.email.toLowerCase().split("@")[0],
      email: authinfo.email
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("Started inserting feedback");
      await insertion(userinfo, "feedback");
      console.log("Inserted feedback Successfully");
      navigate("/user/feedback");
    } catch (error) {
      console.log(`${error} in handleSubmit in feedback insertion`);
    }
  };

  return (
    <AddFeedbackForm
      userinfo={userinfo}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
    />
  );
}
