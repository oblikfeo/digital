import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from './types';
import { RootState } from '../store';

interface CartItem extends Product {
    stack: number,
}

export type AppState = {
    cart: CartState;
};

export interface CartState {
    items: CartItem[];
    quantity: number;
    totalPrice: number;
}

const initialState: CartState = {
    items: [],
    quantity: 0,
    totalPrice: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Product>) {
            const product = action.payload;
            const existingProductIndex = state.items.findIndex(
                (item) => item.id === product.id
            );

            if (existingProductIndex !== -1) {
                state.items[existingProductIndex].stack++;
            } else {
                state.items.push({ ...product, stack: 1 });
                state.quantity += 1;
            }
            state.totalPrice += product.price;
        },
        removeFromCart(state, action: PayloadAction<Product>) {
            const product = action.payload;
            const existingProductIndex = state.items.findIndex(
                (item) => item.id === product.id
            );

            if (existingProductIndex !== -1) {
                if (state.items[existingProductIndex].stack > 1) {
                    state.items[existingProductIndex].stack--;
                } else {
                    state.items.splice(existingProductIndex, 1);
                    state.quantity -= 1;
                }
                state.totalPrice -= product.price;
            }
        },
        clearCart(state) {
            state.items = [];
            state.quantity = 0;
            state.totalPrice = 0;
        }
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectTotalQuantity = (state: RootState) => state.cart.quantity;
export const selectTotalAmount = (state: RootState) => state.cart.totalPrice;