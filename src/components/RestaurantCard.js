import { IMG_CDN_URL } from "../config";

const RestaurantCard = (props) => {
    return (
      <div className="card bg-[#f0f0f0] w-[250px] m-400 p-4 rounded-lg">
        <img className = "rounded-md" src={IMG_CDN_URL + props?.restaurant.info?.cloudinaryImageId} />
        <div className="font-bold">{props?.restaurant?.info?.name}</div>
        <div className="restaurant-cuisines-card">{props?.restaurant?.info?.cuisines.join(", ")}</div>
        <div className="restaurant-cuisines-card">{props?.restaurant?.info?.avgRating} stars</div>
        <div className="restaurant-cuisines-card">{props?.restaurant?.info?.costForTwo} stars</div>
        <div className="restaurant-distance-card">{props?.restaurant?.info?.sla?.lastMileTravelString}</div>
      </div>
    );
  };

  export default RestaurantCard;