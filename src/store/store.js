import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice"

const appStore = configureStore({
    reducer : authSlice
})

export default appStore