import { configureStore } from "@reduxjs/toolkit";
import  ProductSlice  from "./Slices/ProductSlice";

export const Store1 = configureStore({

    reducer:{

  Allcartvalue : ProductSlice,

    },


    
})

