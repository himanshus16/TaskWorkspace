// UserSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "User",
    initialState: {
        userName: "",
        userEmail: "",
        userAuth: false,
    },
    reducers: {
        login: (state, action) => {
            state.userName = action.payload.name;
            state.userEmail = action.payload.email;
            state.userAuth = true;
        },
        logout: (state) => {
            state.userName = "";
            state.userEmail = "";
            state.userAuth = false;
        },
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
