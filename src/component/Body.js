import {restaurantList} from "../constants"
import {RestuarantCard} from "./RestaurantCards"
import { useState } from "react";

// function filterData(srchTxt, restaurant) {
//  const filterData = restaurant.filter((restaurants)=>{
//    restaurants.data.name.includes(srchTxt);
//  });
//  return filterData;
// }
function filterData(srchTxt, restaurant) {
  const filteredData = restaurant.filter((restaurants) =>
    restaurants.data.name.includes(srchTxt)
  );
  return filteredData;
}
const Body = () => {
    //const srchTxt = "KFC";
    const [srchTxt, setSrchTxt] = useState("KFC");
    const [restaurant,  setRestaurant] = useState(restaurantList);

    //const [btn_toggle, setBtn_toggle] = useState("True");
    return(
        <>
        
        <input 
         type="text"
         className="search-input"
         placeholder="Search"
         value={srchTxt}
         onChange={(e)=>{
            setSrchTxt(e.target.value);
         }
         }/>
         {/* <h1>{btn_toggle}</h1> */}
         <button className="search-btn" onClick={()=>{
            // if (btn_toggle === "True"){
            //   setBtn_toggle("False");
            // }
            // else{
            //   setBtn_toggle("True");
            // }
            const data = filterData(srchTxt, restaurant);
            setRestaurant(data);
         }}>
          Search
          </button>
        <div id="restuarantList">
        {
          restaurant.map((restaurant, index) => {
            return(
              <RestuarantCard {...restaurant.data} key={index}/>
            )
          })
        }
        {/* <RestuarantCard {...restaurantList[0].data}/>
        <RestuarantCard {...restaurantList[1].data}/>
        <RestuarantCard {...restaurantList[2].data}/>
        <RestuarantCard {...restaurantList[3].data}/>
        <RestuarantCard {...restaurantList[4].data}/>
        <RestuarantCard {...restaurantList[5].data}/>
        <RestuarantCard {...restaurantList[6].data}/>
        <RestuarantCard {...restaurantList[7].data}/>
        <RestuarantCard {...restaurantList[8].data}/>
        <RestuarantCard {...restaurantList[9].data}/> */}
        </div></>
        
    )
    };

    export default Body;