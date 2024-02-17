import React from 'react';
import ReactDOM  from 'react-dom/client';
import Headers from './component/Header';
import Body from './component/Body';
import { Footer } from './component/Footer';
import About from './component/AboutUs';
import Error from './component/Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './component/Contact';
import { Outlet } from 'react-router-dom';
import Restaurants from './component/Restaurants';
import Profile from './component/Profile';
//import { IMG_CDN } from './constants';

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

 
// const KFC = {
//     name: 'KFC',
//     image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4',
//     price: "4.2",
//     cusines: ['Chicken',' American'],
//     rating: "4.2",
// };




const Component = () => {
    return (
            <>
            <Headers/>
            <Outlet/>
            <Footer/>
            </>
            
    );
};

const appRouter = createBrowserRouter([{
    path: '/',
    element:<Component/>, 
    errorElement: <Error/>,
    children: [
        {
        path: '/',
        element:<Body/>,
       },
       {
        path: '/about',
        element:<About/>,
        children:[
            {
            path: 'profile',
            element:<Profile/>
            }]
       },
       {
        path: '/contact',
        element:<Contact/>,
       },
       {
       path: '/restaurants/:resId',
       element:<Restaurants/>,

       }
    ]
},

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router = {appRouter}/>);