import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
  return (
    <div className="flex flex-col space-y-6 p-6 bg-white">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex items-center justify-between p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-b border-gray-200"
        >
          {/* Left section for item details */}
          <div className="flex-grow">
            <h2 className="text-lg font-bold text-gray-800 mb-1">
              {item.card.info.name}
            </h2>
            <h5 className="text-md font-semibold text-gray-700 mb-1">
              ₹{(item.card.info.defaultPrice || item.card.info.price) / 100}
            </h5>
            {item.card.info.ratings.aggregatedRating.rating && (
              <div className="flex items-center mb-2 text-green-700">
                <span className="text-sm font-semibold mr-1">
                  ⭐ {item.card.info.ratings.aggregatedRating.rating}
                </span>
                <span className="text-xs text-gray-500">
                  ({item.card.info.ratings.aggregatedRating.ratingCount})
                </span>
              </div>
            )}
            <p className="text-sm text-gray-600">
              {item.card.info.description}
            </p>
          </div>

          {/* Right section for item image and add button */}
          <div className="ml-4 flex-shrink-0 relative w-32 h-32">
            {item.card.info.imageId && (
              <img
                src={`${CDN_URL}${item.card.info.imageId}`}
                alt={item.card.info.name}
                className="w-full h-full object-cover rounded-lg"
              />
            )}
            <button
              className="absolute bottom-0 right-0 bg-white text-green-600 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-green-50 transition-colors duration-200 border border-gray-200"
              style={{ transform: 'translateY(50%)', width: '90%', left: '50%', transform: 'translate(-50%, 0)' }}
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
