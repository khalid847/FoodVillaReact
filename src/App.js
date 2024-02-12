import React from 'react';
import ReactDOM  from 'react-dom/client';
import Headers from './component/Header';
import Body from './component/Body';
import { Footer } from './component/Footer';
import { IMG_CDN } from './constants';

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

 
const KFC = {
    name: 'KFC',
    image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4',
    price: "4.2",
    cusines: ['Chicken',' American'],
    rating: "4.2",
};




const Component = () => {
    return (
            <>
            <Headers/>
            <Body/>
            <Footer/>
            </>
            
    );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Component());