import { configureStore } from "@reduxjs/toolkit";
import cartReducre from './cartSlice'
const appStore = configureStore({
  reducer:{
    cart:cartReducre
  },
});
export default appStore;