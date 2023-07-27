import { useEffect, useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  /*
  useEffect
  --> empty dependency array => one time render
  --> dep array [searchText] => one after intial render + after everytime searchText changees
*/

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setFilteredRestaurants(
      json?.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>Please check your internet connection</h1>;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-input border-solid border-2 border-black"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn mx-4 px-4 py-2 bg-green-300"
            onClick={() => {
              const data = filterData(searchText, allRestaurants);
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5">
            {filteredRestaurants?.map((restaurant) => {
              return (
                <Link to={"/restaurant/" + restaurant?.info?.id}>
                  <RestaurantCard
                    key={restaurant.info.id}
                    restaurant={restaurant}
                  />
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Body;
