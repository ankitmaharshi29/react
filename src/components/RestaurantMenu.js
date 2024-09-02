import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constant';
import ResCategory from './category';
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const [showIndex ,setshowIndex] = useState(null)

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_API + resId);
      const json = await response.json();
      setResInfo(json.data);
    } catch (error) {
      console.error('Error fetching menu:', error);
    }
  };

  if (!resInfo) {
    return <div className="text-center py-10 text-gray-600">Loading...</div>;
  }

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;


const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
  (c) => c?.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);


  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="container mx-auto max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold mb-2">{name}</h1>
          <h3 className="text-lg text-gray-600 mb-4">{cuisines.join(", ")}</h3>
          <h3 className="text-lg text-gray-600">{costForTwoMessage}</h3>
        </div>
        {categories.map((category,index) =>  <ResCategory 
         key = {category?.card?.card.title}
         showitem={index=== showIndex?true:false}
         setshowIndex={() => setshowIndex(showIndex === index ? null : index)}
         data={category?.card?.card}/>
          
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
