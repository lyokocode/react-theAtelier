import { configureStore } from '@reduxjs/toolkit'

import siteReducer from "./site"
import modalReducer from './modal'
import basketReducer from './basket'
export default configureStore({
    reducer: {
        site: siteReducer,
        modal: modalReducer,
        basket: basketReducer
    },
})