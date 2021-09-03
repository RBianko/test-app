import { createSlice } from '@reduxjs/toolkit';

const serverSideAccount = {
    username: 'Admin',
    password: '12345678'
}

const initialState = {
    isLoggedIn: false,
    triedToLogin: false,
    user: {
        username: null, 
        password: null
    }
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        login: (state, action) => {
            if (action.payload.username === serverSideAccount.username && action.payload.password === serverSideAccount.password) {
                state.user = {...state.user, ...action.payload};
                state.isLoggedIn = true;
            }
            state.triedToLogin = true;
        },
        logout: (state) => {
            state.user = { name: null, password: null};
            state.isLoggedIn = false;
            state.triedToLogin = false;
        }
    }
})

export const {login, logout} = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;