import React, {lazy, Suspense, useState} from 'react';
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
import Login from './component/Login';
import Shimmer from './component/Shimmer';
import UserContext from './utilities/UserContext';
import { Provider } from 'react-redux';
import store from './utilities/store';
import Cart from './component/Cart';
//import Shimmer from './component/Shimmer';
//import Instamart from './component/Instamart';

const Instamart = lazy(()=>import('./component/Instamart'));
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
    const [user, setUser]=useState(
      {
        name: "Khalid Saifullah",
        email: "khalid@gmail.com"
      }  
    );
    return (
            <Provider store={store}>
                <UserContext.Provider value={{user:user,setUser:setUser,}}>
                <Headers/>
                <Outlet/>
                <Footer/>
                </UserContext.Provider>
            </Provider>
            
    );
};

const appRouter = createBrowserRouter([
{
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

       },
       {
        path: '/instamart',
        element:<Suspense fallback={<Shimmer/>}>
            <Instamart/>
            </Suspense>,
       },
       {
        path: '/cart',
        element:<Cart/>
       }
    ]
},
{
    path: '/login',
    element:<Login />
}

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router = {appRouter}/>);