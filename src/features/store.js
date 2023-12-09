import {configureStore} from "@reduxjs/toolkit";

import categoriesSlice from "./categories/categoriesSlice";
import products from "../components/Products/Products";
import productsSlice from "./products/productsSlice";

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice,
    },
    devTools: true,
})