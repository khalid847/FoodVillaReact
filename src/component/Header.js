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
    return (
        <div className='header'>
            <Title/>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
                
            </div>
        </div>
    );
};
export default Headers;