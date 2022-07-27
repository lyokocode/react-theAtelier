import { configureStore } from '@reduxjs/toolkit'

import siteReducer from "./site"
import modalReducer from './modal'
export default configureStore({
    reducer: {
        site: siteReducer,
        modal: modalReducer
    },
})