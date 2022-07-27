import { createSlice } from "@reduxjs/toolkit"


export const modal = createSlice({
    name: "modal",
    initialState: {
        openModal: false
    },
    reducers: {
        toogleModal: state => {
            state.openModal = !state.openModal
        }
    },

})

export const { toogleModal } = modal.actions
export default modal.reducer