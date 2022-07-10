let SET_TO_CART = 'SET_TO_CART';
let DELETE_FROM_CART = 'DELETE_FROM_CART';

let initialState = {
    itemsInCart: []
}

const cartDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TO_CART:
            // debugger
            return {
                ...state,
                itemsInCart: [...state.itemsInCart, action.item]
            }
        case DELETE_FROM_CART:
            return {
                ...state,
                itemsInCart: state.itemsInCart.filter(item => item.id !== action.id)
            }
        default: return state;
    }
}

export let setItemInCartAC = item => ({
    type: SET_TO_CART, item
})

export let deleteItemFromCartAC = id => ({
    type: DELETE_FROM_CART, id
})

export default cartDataReducer;

// import { createSlice } from '@reduxjs/toolkit'
// import { ItemsInCart } from '../../../unit_5/src/components/items-in-cart';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     itemsInCart: [],
//   },
//   reducers: {
//     setItemInCart: (state, action) => {
//       state.itemsInCart.push(action.payload)
//     },
//     deleteItemFromCart: (state, action) => {
//       state.itemsInCart = state.itemsInCart.filter(game => game.id !== action.payload)
//     },
//   }
// });

// export const { setItemInCart, deleteItemFromCart } = cartSlice.actions;
// export default cartSlice.reducer;