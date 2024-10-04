// import { configureStore } from '@reduxjs/toolkit' 
// import cartSlice from './cartSlice'

// export const store = configureStore({
//   reducer: {
//     cart : cartSlice
//   },
//   devTools : true
// })





import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';  // Import the default export

export const store = configureStore({
  reducer: {
    cart: cartReducer,  // Use the correct reference
  },
});
