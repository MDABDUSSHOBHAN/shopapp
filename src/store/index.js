import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../store/slices/cart-slice'


const store = configureStore({


    reducer:{
        cart: cartReducer,
        // productReducer : produceReducer,



    }
})

export default store;

