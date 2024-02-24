import { useSelector } from "react-redux";
import { FoodItems } from "./FoodItems";
import { useDispatch } from "react-redux";
import { clearCart } from "../utilities/cartSlice";
const cart =()=>{
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const handleClear=()=>{
        dispatch(clearCart());
    }
    return(
        <div>
            <h1 className="font-bold">Cart Items - {cartItems.length}</h1>
            {/* {cartItems.map((item)=>{
                    <FoodItems{...item}/>
            })} */}
            <button className="bg-slate-300 p-2 m-2 rounded-md" 
                onClick={
                    ()=>handleClear()
                }>Clear Cart</button>
           <div className="flex">
                {cartItems.map((item)=>
                 <FoodItems {...item}/>
                )}
            </div> 
            
            

        </div>
    )
}

export default cart;