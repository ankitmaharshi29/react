import { CDN_URL } from "../utils/conatant";

const RestaurantCard = (props) => {
  const { resData } = props;

  // Destructuring the necessary properties from resData.info
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla, // Extracting deliveryTime from sla object
  } = resData?.info; // Adjusted from resData?.data to resData?.info

  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt={name} />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>costForTwo:{costForTwo }</h4>
      <h4>{sla.slaString} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
