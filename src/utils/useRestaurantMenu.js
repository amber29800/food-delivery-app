import { useState,useEffect } from "react";
import { MENU_API_URL } from "../config";

const useRestaurantMenu = (resId) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

const getRestaurantInfo = async () => {
    const data = await fetch(
      MENU_API_URL + resId
    );
    const json = await data.json();
    setRestaurantMenu(json.data);
  }

  return restaurantMenu;
};

export default useRestaurantMenu;
 