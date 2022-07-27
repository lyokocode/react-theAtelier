import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    items: []
}

export const basket = createSlice({
    name: "basket",
    initialState,

    reducers: {
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload]
        },

        removeFromBasket: (state, action) => {
            const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id)
            let newBasket = [...state.items]
            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn(`bilmiyorun ne işe yarar ama ${action.payload.id} nin silinmesi gerekiyor`)

            }
            state.items = newBasket
        }
    },

})

export const { addToBasket, removeFromBasket } = basket.actions
export const selectItems = (state) => state.basket.items
export default basket.reducer