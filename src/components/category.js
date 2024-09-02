import ItemList from "./ItemList";

const ResCategory = ({ data, showitem, setshowIndex }) => {
  
  const handleclick = (event) => {
    // Toggle visibility only when the header is clicked
    if (event.target.closest('.category-header')) {
      setshowIndex(); 
    }
  }

  return (
    <div className="border border-gray-200 rounded-xl shadow-lg mb-6 transition-all duration-300 hover:shadow-2xl bg-white">
      {/* Header for category with interactive click */}
      <div 
        className="category-header p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-xl cursor-pointer transition-colors duration-300 hover:from-blue-600 hover:to-purple-600"
        onClick={handleclick}
      >
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">{data.title} ({data?.itemCards?.length})</span>
          <span className={`text-xl transform transition-transform duration-300 ${showitem ? 'rotate-180' : ''}`}>⬇️</span>
        </div>
      </div>
      {showitem && 
        <div className="p-4">
          <ItemList items={data.itemCards} />
        </div>
      }
    </div>
  );
};

export default ResCategory;

