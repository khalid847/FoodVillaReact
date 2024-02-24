import { useEffect, useState } from "react";
const MENU_ITEM_TYPE_KEY="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
const useRestaurant =(resId)=>{
    const [restuarantMen, setRestaurantMen] = useState([]);
    // get data from API
    const[menuItems, setMenuItems] = useState([]); 

    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
    //  console.log(json?.data?.cards[4]);
        setRestaurantMen(json?.data?.cards[2]?.card?.card?.info);
        setMenuItems(json?.data?.cards[4].
        groupedCard?.cardGroupMap?.REGULAR?.
        cards?.map(x => x.card?.card)?.
        filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
        map(x=> x.itemCards).flat().map(x=> x.card?.info) || []);
        console.log(menuItems);
    }

    // return restaurant data
    return menuItems;
}

export default useRestaurant;