//import { useState } from "react";
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import UserContext from '../utilities/UserContext';
import { useSelector } from 'react-redux';

const Title =()=>(
    <a href='/'>
    <img 
    alt="logo not available" 
    className='h-28 p-1'
    src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"
    />
   </a>
   );

const Headers = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const navigate = useNavigate();
    const {user} = useContext(UserContext);
    const cartItems = useSelector((store)=>store.cart.items)
    console.log(cartItems);
    return (    
        <div className='flex justify-between bg-slate-300 text-xl shadow-lg mb-2'>
            <Title/>
            <div className='flex justify-center'>
                <ul className='flex py-8'>
                    <li className='p-2 text-2xl hover:text-amber-500 hover:bg-gray-50 hover:rounded-full'><Link to='/'>Home</Link></li>
                    <li className='p-2 text-2xl hover:text-amber-500 hover:bg-gray-50 hover:rounded-full'><Link to='/about'>About</Link></li>
                    <li className='p-2 text-2xl hover:text-amber-500 hover:bg-gray-50 hover:rounded-full'><Link to='/contact'>Contact</Link></li>
                    <li className='p-2 text-2xl hover:text-amber-500 hover:bg-gray-50 hover:rounded-full'><Link to='/instamart'>Instamart</Link></li>
                    <li className='p-2 text-2xl hover:text-amber-500 hover:bg-gray-50 hover:rounded-full'><Link to='/cart'>Cart {cartItems.length}-items</Link></li>
                </ul>
                
            </div>
            {/* <button className='logged-btn' onClick={<Link to='/login'/>}>Login</button> */}
            <span className='font-bold p-10 '>{user.name}</span>
            {isLoggedIn?(<button className='hover:bg-gray-50 hover:text-amber-500 rounded-md text-2xl mr-3' onClick={()=>setIsLoggedIn(false)}> Logout </button>):(<button className='hover:bg-gray-50 hover:text-amber-500 rounded-md text-2xl mr-3' onClick={()=>navigate('/login')}> Login </button>)}
        </div>
    );
};
export default Headers;