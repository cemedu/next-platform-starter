import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        user: {}
    },
    reducers: {
        user: (state, action) => {
            return { ...state, user: action.payload }
        },
        logout: (state, action) => {
            return { ...state, user: action.payload }
        },
    },
});

export default UserSlice.reducer;