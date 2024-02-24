// const RestuarantCard = (props) => {
import { IMG_CDN } from "../constants";  
import { useContext } from "react";
import UserContext from "../utilities/UserContext";
export  const FoodItems = ({
        name, 
        category, 
        price, 
        imageId,

      }) => {
         //const {name, cuisines, lastMileTravel, cloudinaryImageId} = restaurant.data;
          //const {user}= useContext(UserContext);
          return (
              <div className='w-56 p-2 m-2 shadow-xl'>
                  <img src={IMG_CDN+imageId} alt="no image" />
                  <h2 className="font-bold text-2xl">{name}</h2>
                  <h3>{category}</h3>
                  <h4>Tupees: {price/100}</h4>
                  {/* <h5>{user.name}-{user.email}</h5> */}
                  {/* <h4>{user.name}</h4> */}

              </div>
          //      <div className='card'>
          //        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restaurant.data?.cloudinaryImageId} alt="no image" />
          //        <h2>{restaurant.data?.name}</h2>
          //        <h3>{restaurant.data?.cuisines.join(" , ")}</h3>
          //        <h4>{restaurant.data?.lastMileTravel} minutes</h4>
          //      </div>
          );
      };