// const RestuarantCard = (props) => {
  import { IMG_CDN } from "../constants";  
  export  const RestuarantCard = ({
        name, 
        cuisines, 
        locality, 
        cloudinaryImageId,
      }) => {
         //const {name, cuisines, lastMileTravel, cloudinaryImageId} = restaurant.data;
          return (
              <div className='card'>
                  <img src={IMG_CDN+cloudinaryImageId} alt="no image" />
                  <h2>{name}</h2>
                  <h3>{cuisines.join(", ")}</h3>
                  <h4>{locality}</h4>
              </div>
          //      <div className='card'>
          //        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restaurant.data?.cloudinaryImageId} alt="no image" />
          //        <h2>{restaurant.data?.name}</h2>
          //        <h3>{restaurant.data?.cuisines.join(" , ")}</h3>
          //        <h4>{restaurant.data?.lastMileTravel} minutes</h4>
          //      </div>
          );
      };