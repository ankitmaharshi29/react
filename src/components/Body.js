import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredList, setfilteredList] = useState([]);
  const [searchtext, setsearchtext] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="body bg-gray-100 min-h-screen p-6">
      <div className="search-container flex justify-center mb-8">
        <input
          type="text"
          className="search-box w-full max-w-md p-4 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          value={searchtext}
          onChange={(e) => {
            setsearchtext(e.target.value);
          }}
          placeholder="Search Food or Restaurant"
        />
        <button
          className="ml-4 px-6 py-3 bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 transition duration-300 ease-in-out"
          onClick={() => {
            const filteredList = listOfRestaurants?.filter((res) =>
              res.info.name.toLowerCase().includes(searchtext.toLowerCase())
            );
            setfilteredList(filteredList);
          }}
        >
          Search
        </button>
      </div>

      <div className="filter flex justify-center mb-8">
        <button
          className="filter-btn px-6 py-3 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition duration-300 ease-in-out"
          onClick={() => {
            const filteredList = listOfRestaurants?.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setfilteredList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredList?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/Restaurant/${restaurant.info.id}`}
            className="block"
            style={{ textDecoration: "none" }}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
