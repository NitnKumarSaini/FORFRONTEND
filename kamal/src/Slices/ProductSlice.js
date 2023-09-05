import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Api from "../Api"


  export const midelwear=createAsyncThunk("api", async ()=>{
    const api = await axios(`https://dummyjson.com/products`)

    // const apidata = api.products
    return api.products

    
})

// const initialState = { 
//     cart: [],
//     item: Api, 
//     totalquanatity : 0,
//     totalprice : 0 
//  } 

  export const ProductSlice = createSlice({
    name : "Cart",
    // initialState,
    initialState : {
        user : [],
        loadding : false,
        error : null
    },
    reducers : {
        increment:(state,action)=>{
state.cart.push(action.payload)

}


    },
    extraReducers:{
        [midelwear.pending]:(state )=>{
            state.loadding= true
        },
        [midelwear.fulfilled]:(state , action)=>{
            state.loadding= false ;
            state.user = action.payload

        },
        [midelwear.rejected]:(state , action)=>{
            state.loadding= false ;

            state.error = action.payload
        }
    }

})


// export const { increment, totalprice ,cart , totalquanatity} = ProductSlice.actions


export default ProductSlice.reducer