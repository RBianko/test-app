import { configureStore } from '@reduxjs/toolkit';
import useReduser from "../reducers/userSlice";

export default configureStore({
    reducer: {
        user: useReduser
    }
})