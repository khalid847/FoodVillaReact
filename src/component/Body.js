// // import {restaurantList} from "../constants"
// import {RestuarantCard} from "./RestaurantCards"
// import { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";

// // function filterData(srchTxt, restaurant) {
// //  const filterData = restaurant.filter((restaurants)=>{
// //    restaurants.data.name.includes(srchTxt);
// //  });
// //  return filterData;
// // }
// function filterData(srchTxt, restaurant) {
//   const filteredData = restaurant.filter((restaurants) =>
//     restaurants?.info?.name.toLowerCase().includes(srchTxt.toLowerCase())
//   );
//   return filteredData;
// }
// const Body = () => {
//     //const srchTxt = "KFC";
//     const [allRestaurant, setAllRestaurants] = useState([]);
//     const [filteredRestaurant,  setFilteredRestaurant] = useState([]);
//     const [srchTxt, setSrchTxt] = useState("");
    
//     useEffect(() => {
      
//       getRestaurant();
      
//     },[])

//     async function getRestaurant(){
//       const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//       const json = await data.json();
//       //console.log(json);
//       setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//       setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
//     }
//     // async function getRestaurant() {
//     //   try {
//     //     const response = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
//     //     if (!response.ok) {
//     //       throw new Error('Failed to fetch data');
//     //     }
//     //     const data = await response.json();
//     //     // Check the structure of the response data
//     //     //console.log(data);
//     //     // Assuming the data structure matches your expectation, set the restaurant state
//     //     setRestaurant(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     //   } catch (error) {
//     //     console.error('Error fetching data:', error);
//     //   }
//     // }
    
//     //const [btn_toggle, setBtn_toggle] = useState("True");
//     if(!allRestaurant) return null;
//     if(filteredRestaurant?.length===0)
//       return <h1>No filtered restuarnt matched</h1>
//     return (filteredRestaurant.length===0)?<Shimmer/>:
//         (<>
        
//         <input 
//          type="text"
//          className="search-input"
//          placeholder="Search"
//          value={srchTxt}
//          onChange={(e)=>{
//             setSrchTxt(e.target.value);
//          }
//          }/>
//          {/* <h1>{btn_toggle}</h1> */}
//          <button className="search-btn" onClick={()=>{
//             // if (btn_toggle === "True"){
//             //   setBtn_toggle("False");
//             // }
//             // else
//             //   setBtn_toggle("True");
//             // }
//             const data = filterData(srchTxt, allRestaurant);
//             setFilteredRestaurant(data);
//          }}>
//           Search
//           </button>
//         <div id="restuarantList">
//         {
//           filteredRestaurant.map((restaurant, index) => {
//             return(
//               <RestuarantCard {...restaurant?.info} key={index}/>
//             )
//           })
//         }
//         {/* <RestuarantCard {...restaurantList[0].data}/>
//         <RestuarantCard {...restaurantList[1].data}/>
//         <RestuarantCard {...restaurantList[2].data}/>
//         <RestuarantCard {...restaurantList[3].data}/>
//         <RestuarantCard {...restaurantList[4].data}/>
//         <RestuarantCard {...restaurantList[5].data}/>
//         <RestuarantCard {...restaurantList[6].data}/>
//         <RestuarantCard {...restaurantList[7].data}/>
//         <RestuarantCard {...restaurantList[8].data}/>
//         <RestuarantCard {...restaurantList[9].data}/> */}
//         </div></>
        
//     )
//     };

//     export default Body;
// import {restaurantList} from "../constants"
import { RestuarantCard } from "./RestaurantCards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"

function filterData(srchTxt, restaurant) {
  const filteredData = restaurant.filter((restaurants) =>
    restaurants?.info?.name.toLowerCase().includes(srchTxt.toLowerCase())
  );
  return filteredData;
}

const Body = () => {
  const [allRestaurant, setAllRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [srchTxt, setSrchTxt] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const json = await response.json();
      const restaurantData =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setAllRestaurants(restaurantData);
      setFilteredRestaurant(restaurantData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  if (loading) {
    return <Shimmer />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!allRestaurant) {
    return null;
  }

  if (filteredRestaurant?.length === 0) {
    return <h1>No filtered restaurant matched</h1>;
  }

  return (
    <>
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={srchTxt}
        onChange={(e) => {
          setSrchTxt(e.target.value);
        }}
      />
      <button
        className="search-btn"
        onClick={() => {
          const data = filterData(srchTxt, allRestaurant);
          setFilteredRestaurant(data);
        }}
      >
        Search
      </button>
      <div id="restaurantList">
        {filteredRestaurant.map((restaurant, index) => (
          <Link to={'/restaurants/'+restaurant?.info?.id}><RestuarantCard {...restaurant?.info} key={restaurant?.info.id} /></Link>
        ))}
      </div>
    </>
  );
};

export default Body;