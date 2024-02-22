//import { useState } from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Title =()=>(
    <a href='/'>
    <img 
    alt="logo not available" 
    className='logo'
    src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"
    />
   </a>
   );

const Headers = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const navigate = useNavigate();
    return (    
        <div className='header'>
            <Title/>
            <div className='nav-items'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/instamart'>Instamart</Link></li>
                    <li>Cart</li>
                </ul>
                
            </div>
            {/* <button className='logged-btn' onClick={<Link to='/login'/>}>Login</button> */}
            {isLoggedIn?(<button className='logged-btn' onClick={()=>setIsLoggedIn(false)}> Logout </button>):(<button className='logged-btn' onClick={()=>navigate('/login')}> Login </button>)}
        </div>
    );
};
export default Headers;