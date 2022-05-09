import { configureStore } from "@reduxjs/toolkit";
import {productsReducer } from "./Reducers/ProductReducer";
import { forgotPasswordReducer, userReducer } from "./Reducers/UserReducer";

const Store = configureStore({
    reducer:{
        products: productsReducer,
        user: userReducer,
        forgotPassword:forgotPasswordReducer,
    },
})
export default Store;