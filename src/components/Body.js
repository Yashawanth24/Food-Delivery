import { useEffect, useState } from "react";
import {ResCard} from './ResList1'
import Shimmer from './Shimmer'
import { Link } from "react-router-dom";
import useOnlineStatus from './useOnlineStatus'

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchRestaurants, setSearchRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);
      setRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      setSearchRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
      console.log(restaurants.info.cuisines);
    }
  };

  const onlineStatus = useOnlineStatus();

  // Display offline message if user is offline
  if (!onlineStatus) {
    return (
      <div className="body-container flex justify-center items-center h-screen">
        <h2 className="text-red-500 text-2xl">Looks like you're offline!</h2>
      </div>
    );
  }

  // Handler for search functionality
  const handleSearch = () => {
    const filteredRestaurants = restaurants.filter(restaurant =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchRestaurants(filteredRestaurants);
  };

  const HandlePizza = () => {
    const PizzaHandle = restaurants.filter(restaurant => 
      restaurant.info.name.toLowerCase().includes('Pizza'.toLowerCase())
    );
    setSearchRestaurants(PizzaHandle);
  };

  const handleIceCream = () => {
    const handleIceCream = restaurants.filter(restaurant => 
      Array.isArray(restaurant.info.cuisines) && 
      restaurant.info.cuisines.some(cuisine => 
        cuisine.toLowerCase().includes('IceCream')
      )
    );
    setSearchRestaurants(handleIceCream);
  };

  const handleChart = () => {
    const ChatHandle = restaurants.filter(restaurant => 
      Array.isArray(restaurant.info.cuisines) && 
      restaurant.info.cuisines.some(cuisine => 
        cuisine.toLowerCase().includes('snacks')
      )
    );
    setSearchRestaurants(ChatHandle);
  };
  const handleSouth = () => {
    const Southhandle = restaurants.filter(restaurant => 
      Array.isArray(restaurant.info.cuisines) && 
      restaurant.info.cuisines.some(cuisine => 
        cuisine.toLowerCase().includes('South Indian')
      )
    );
    setSearchRestaurants(Southhandle);
  };
  const handleNorth = () => {
    const NorthHandle = restaurants.filter(restaurant => 
      Array.isArray(restaurant.info.cuisines) && 
      restaurant.info.cuisines.some(cuisine => 
        cuisine.toLowerCase().includes('North Indian')
      )
    );
    setSearchRestaurants(NorthHandle);
  };

  
  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body-container p-4">
      <div className="box-con mb-4">
        <div className="flex items-center">
          <input
            type="text"
            className="border border-solid border-gray-300 p-2 mr-2 items-center w-[22%]"
            placeholder="Search Restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-6 py-2 bg-green-200 rounded-lg  hover:bg-red-100"
            onClick={handleSearch}
          >
            Search
          </button>
          <div className="pl-6">
            <button className="px-4 py-2 bg-transparent border border-black hover:bg-blue-600 text-black rounded-lg ml-4" onClick={HandlePizza}>Pizza</button>
          </div>
          <div>
            <button className="px-4 py-2 bg-transparent border border-black hover:bg-blue-600 text-black rounded-lg ml-4" onClick={handleIceCream}>Ice Cream</button>
          </div>
          <div>
            <button className="px-4 py-2 bg-transparent border border-black hover:bg-blue-600 text-black rounded-lg ml-4" onClick={handleChart}>Charts</button>
          </div>
          <div>
            <button className="px-4 py-2 bg-transparent border border-black hover:bg-blue-600 text-black rounded-lg ml-4" onClick={handleSouth}>South Indian</button>
          </div>
          <div>
            <button className="px-4 py-2 bg-transparent border border-black hover:bg-blue-600 text-black rounded-lg ml-4" onClick={handleNorth}>North Indian</button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap">
        {searchRestaurants.map(restaurant => (
          <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
            <ResCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
