// import { createSlice } from '@reduxjs/toolkit'

// const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];
// console.log(initialState)


// export const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart(state, action) {
//             state.push(action.payload)
//         },
//         deleteFromCart(state, action) {
//             return state.filter(item => item.id != action.payload.id);
//         },
//         incrementQuantity: (state, action) => {
//             state = state.map(item => {
//                 if (item.id === action.payload) {
//                     item.quantity++;
//                 }
//                 return item;
//             });
//         },
//         decrementQuantity: (state, action) => {
//             state = state.map(item => {
//                 if (item.quantity !== 1) {
//                     if (item.id === action.payload) {
//                         item.quantity--;
//                     }
//                 }
//                 return item;

//             })
//         },
//     },
// })

// // Action creators are generated for each case reducer function
// export const { addToCart, deleteFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions

// export default cartSlice.reducer





import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];
console.log(initialState);

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
        },
        deleteFromCart(state, action) {
            return state.filter(item => item.id !== action.payload.id);
        },
        deleteAllFromCart(state) {
            return [];
        },
        incrementQuantity: (state, action) => {
            return state.map(item => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
        },
        decrementQuantity: (state, action) => {
            return state.map(item => {
                if (item.id === action.payload && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, deleteFromCart, deleteAllFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
