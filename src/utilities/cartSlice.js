import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items:[],
    },
    reducers: {
        addItem: (state, action)=>{                       //additem is action ()is reducer function
            state.items.push(action.payload);
        },
        removeItem: (state)=>{
            //state.item.splice(action.payload, 1);
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items=[];
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;