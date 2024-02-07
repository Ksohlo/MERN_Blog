import { createSlice } from "@reduxjs/toolkit";

const initialStates = {
    currentUser: null,
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialStates,
    reducers: {
        signinstart: (state) => {
            state.loading = true;
            state.error = null;
        },
        signinSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signinFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    },
});

export default userSlice;

export const { signinStart, signinSuccess, signinFailure } = userSlice.actions;