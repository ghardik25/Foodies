import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { InsertDeleteContext } from "../context/InsertDeleteContext";
import AddItemForm from "../components/AddItemForm";

export default function AddItem() {
  const [userinfo, setuserinfo] = useState({
    dishName: "",
    price: ""
  });

  const navigate = useNavigate();
  const { insertion } = useContext(InsertDeleteContext);


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
      console.log("Started inserting item");
      await insertion(userinfo, document.querySelector('#category').value.toLowerCase());
      console.log("Inserted item Successfully");
      navigate("/canteen/menu");
    } catch (error) {
      console.log(`${error} in handleSubmit in feedback insertion`);
    }
  };

  return (
    <AddItemForm
      userinfo={userinfo}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
    />
  );
}
