import { json, useParams } from "react-router-dom"; 
import { useEffect } from "react";
import { useState } from "react";
import {IMG_CDN} from "../constants";
import Shimmer from "./Shimmer";

const MENU_ITEM_TYPE_KEY="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
const Restaurants =()=>{
 const {resId} = useParams();
    // console.log(params);
    // const k = params.id;

const[restuarantMen, setRestaurantMen] = useState({});   
const[menuItems, setMenuItems] = useState([]); 

useEffect(()=>{
    getRestaurantInfo();
},[]);

async function getRestaurantInfo() {
 const data = await fetch(
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
    );
 const json = await data.json();
//  console.log(json?.data?.cards[4]);
 setRestaurantMen(json?.data?.cards[2]?.card?.card?.info);
 setMenuItems(json?.data?.cards.find(x=> x.groupedCard)?.
    groupedCard?.cardGroupMap?.REGULAR?.
    cards?.map(x => x.card?.card)?.
    filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
    map(x=> x.itemCards).flat().map(x=> x.card?.info) || []);
}


 return(!restuarantMen)? <Shimmer/>:(
//     <><div className="">
//         <h1>
//             This is the Restaurant Page id:{resId}
//         </h1>
//         <h2>{restuarantMen.name}</h2>
//         <img src={IMG_CDN+restuarantMen.cloudinaryImageId} alt={restuarantMen.name}/>
//         <h2>{restuarantMen.areaName}</h2>
//         <h2>{restuarantMen.city}</h2>
//         <h2>{restuarantMen.avgRating} stars </h2>
//         <h2>{restuarantMen.costForTwoMessage}</h2>
//     </div>
//     {/* <div>
//         {(menuItems.map((items)=>(
//             <li>{items.name}</li>
//         )))}
       
//     </div> */}
//     <div className="restMenu"><h1>Menu</h1>
//     <ul> {/* Enclose the list items within a <ul> or <ol> element */}
//         {menuItems.map((item, index) => (
//             <li key={index}>{item.name}</li> 
//         ))}
//     </ul>
// </div>
//     </>
//  )
<div className="restaurant-container">
    <div className="restaurant-info">
      <h1>This is the Restaurant Page id: {resId}</h1>
      <h2>{restuarantMen.name}</h2>
      <img src={IMG_CDN + restuarantMen.cloudinaryImageId} alt={restuarantMen.name} />
      <h2>{restuarantMen.areaName}</h2>
      <h2>{restuarantMen.city}</h2>
      <h2>{restuarantMen.avgRating} stars</h2>
      <h2>{restuarantMen.costForTwoMessage}</h2>
    </div>
    <div className="menu-container">
      <h1>Menu</h1>
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">{item.name}</li>
        ))}
      </ul>
    </div>
  </div>
);
};

export default Restaurants;