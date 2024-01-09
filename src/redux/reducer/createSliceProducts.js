import { createSlice  } from "@reduxjs/toolkit";
const initialState = {
 cart : [],
 quantity : 0,
 amount : 0,
};
const cartSlice = createSlice({
    name: "products",
    initialState,
    reducers : {
        addCart : (state , action)=>{
         const id = action.payload._id;
         state.count =+1;
         const cartItem = state.cart.findIndex(cart => cart._id === id);
        //  cartItem>=0 ? (state.cart[cartItem].quantity +=1) : state.cart.push({...action.payload , quantity : 1})
        if (cartItem >=0) {
            state.cart[cartItem].quantity +=1;
        }else{
            state.cart.push({...action.payload , quantity : 1});
            state.amount +=1;
        }
        },
        deleteCart : (state , action)=>{
            state.cart = state.cart.filter((item) => item._id !== action.payload_id)
            state.quantity -= 1;
        },
         clearCart : (state)=>{
            state.cart = [];
            state.quantity = 0;
        }
    },
})

export const {addCart , deleteCart , clearCart} = cartSlice.actions;
export default cartSlice.reducer;