import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "./booksSlice";
import recordsSlice from "./recordsSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer:{
        books:booksSlice,
        records:recordsSlice,
        user:userSlice
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;