import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"Cart",
    initialState:{
        items:[],
        total:0,
    
    },
    reducers:{
        addItems:(state, action)=>{
      state.items.push(action.payload);
        },
        removeItems:(state, action)=>{
            state.items.pop(action.payload)
        },
        clearCart:(state,action)=>{
            state.items.length=0;
        },
       
    },
});

export const{addItems,removeItems,clearCart,setCartTotal}=cartSlice.actions;
export default cartSlice.reducer;