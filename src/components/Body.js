import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredList, setfilteredList] = useState([]);
 const[searchtext,setsearchtext]= useState("")
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING" );

    // const json = await data.json();
    const json = await data.json();
   
   
   
   
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return (
    <div className="body">
      
        <div className="search-container">
          <input type="text" className="search-box" value={searchtext} onChange={(e)=>{
            setsearchtext(e.target.value)
           
            
          }} placeholder="Search Food or Restaurant" />
          <button onClick={()=>{
         const filteredList= listOfRestaurants?.filter((res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
         setfilteredList(filteredList)
          }}>Search</button>
        </div>
      
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // * Filter logic
            const filteredList = listOfRestaurants?.filter(
              (restaurant) => restaurant.info.avgRating > 4,
            );

           setfilteredList(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
     {filteredList?.map((restaurant, index) => {
    if (!restaurant || !restaurant.info) {
      console.warn(`Missing data at index ${index}:`, restaurant);
      return null; // Skip rendering for this item
    }

    console.log(restaurant.info.id); // This should now only log valid IDs
    return <RestaurantCard key={restaurant.info.id} resData={restaurant} />;
  })}
</div>

</div>


  
     
   
  );
};

export default Body;
