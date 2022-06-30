import {configureStore} from "@reduxjs/toolkit";
import bearReducer from './slices/bearSlice';

export const store = configureStore({
    reducer: {
        'bear': bearReducer
    }
})