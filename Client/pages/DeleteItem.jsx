import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { InsertDeleteContext } from "../context/InsertDeleteContext";
import DeleteItemForm from "../components/DeleteItemForm";

export default function DeleteItem() {
  const [userinfo, setuserinfo] = useState({
    dishName: ""
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
      console.log("Started deleting item");
      await deletion(userinfo, document.querySelector('#category').value.toLowerCase());
      console.log("Deleted item Successfully");
      navigate("/canteen/menu");
    } catch (error) {
      console.log(`${error} in handleSubmit in feedback insertion`);
    }
  };

  return (
    <DeleteItemForm
      userinfo={userinfo}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
    />
  );
}
