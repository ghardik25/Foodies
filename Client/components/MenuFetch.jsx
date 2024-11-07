import Breakfast from "./Breakfast"
import Lunch from "./Lunch"
import Dinner from "./Dinner"

export default function MenuFetch() {
  const menuFetching = async (collection) => {
    const response = await fetch(`http://localhost:3000/get${collection}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    
      return await response.json();
  }

  return <>
    <Breakfast menuFetching={menuFetching} />
    <Lunch menuFetching={menuFetching} />
    <Dinner menuFetching={menuFetching} />
  </>
}