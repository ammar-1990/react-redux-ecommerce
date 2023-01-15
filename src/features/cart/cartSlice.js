import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    cart: JSON.parse(localStorage.getItem('cart')) || []
}


 const cartSlice=createSlice({
    name: 'cart',
    initialState,
    reducers: {
ADD: (state,action) => {
if(state.cart.find(el=>el.id===action.payload.id))
state.cart.map(el=>{
    el.id===action.payload.id && el.qty++
    return el
})
else 
state.cart.push({...action.payload,qty:action.payload.qty+1})
},
REMOVE : (state,action)=> {
    if(state.cart.find(el=>el.id===action.payload.id).qty===1)
state.cart=state.cart.filter(el=>el.id !== action.payload.id)
else 
{
    state.cart.map(el=> {
        el.id===action.payload.id && el.qty--
        return el
    })
}
},
DELETE:(state,action) => {
    
   state.cart= state.cart.filter(el=>
    
       el.id !== action.payload.id
    )
}
    }
})

export default cartSlice.reducer
export const {ADD,REMOVE,DELETE}=cartSlice.actions