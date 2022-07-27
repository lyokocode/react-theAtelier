import { createSlice } from "@reduxjs/toolkit"


export const site = createSlice({
    name: "site",
    initialState: {
        color: false,
    },
    reducers: {
        setColorMode: state => {
            state.color = !state.color
        }
    },

})

export const { setColorMode } = site.actions
export default site.reducer
