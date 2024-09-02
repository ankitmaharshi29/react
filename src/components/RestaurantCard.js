import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div className="res-card bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl w-full max-w-sm mx-auto">
      <img
        className="w-full h-48 object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <h4 className="text-gray-600 mb-2">{cuisines.join(", ")}</h4>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span className="flex items-center">
            <svg
              className="w-5 h-5 text-yellow-500 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 15l-3.5 2 1.3-4.2L3 8l4.2-.3L10 4l2.8 3.7L18 8l-4.8 2.8L13.5 17z" />
            </svg>
            {avgRating} ★
          </span>
          <span>{costForTwo} for two</span>
          <span>{sla.slaString} minutes</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
