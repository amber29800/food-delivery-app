import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const ResaturantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurantMenu(resId);


  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restaurant-page" key={restaurant.id}>
      <div className="restaurant-info">
        <div className="restaurant-name">
          {restaurant?.cards[0]?.card.card?.info?.name}
        </div>
        <img
          alt="Logo"
          src={
            IMG_CDN_URL +
            restaurant?.cards[0]?.card.card?.info?.cloudinaryImageId
          }
        />
        <div className="restaurant-areaName">
          {restaurant?.cards[0]?.card.card?.info?.areaName}
        </div>
        <div className="restaurant-city">
          {restaurant?.cards[0]?.card.card?.info?.city}
        </div>
        <div className="restaurant-cuisines">
          {restaurant?.cards[0]?.card.card?.info?.cuisines.join(", ")}
        </div>
        <div className="restaurant-costForTwoMessage">
          {restaurant?.cards[0]?.card.card?.info?.costForTwoMessage}
        </div>
      </div>
      <div className="restaurant-menu">
        {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
          ?.slice(2, 10)
          .map((e, index) => {
            return e?.card?.card?.itemCards?.map((b) => {
              console.log(b);
              return <li key={b?.card?.info?.id}>{b?.card?.info?.name}</li>;
            });
          })}
      </div>
    </div>
  );
};

export default ResaturantMenu;
