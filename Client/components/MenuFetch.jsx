import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Dinner from "./Dinner";

// eslint-disable-next-line no-undef
const BASE_URL = process.env.VITE_APP_API_URL;

export default function MenuFetch() {
  const menuFetching = async (collection) => {
    const response = await fetch(`${BASE_URL}/get${collection}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  };

  return (
    <>
      <Breakfast menuFetching={menuFetching} />
      <Lunch menuFetching={menuFetching} />
      <Dinner menuFetching={menuFetching} />
    </>
  );
}
