import { createSlice } from '@reduxjs/toolkit';

const LoadingSlice = createSlice({
    name: 'loading',
    initialState: {
        loading: false,
        error: false,
    },
    reducers: {
        loading: (state, action) => {
            return { ...state, loading: action.payload }
        },
        error: (state, action) => {
            return { ...state, error: action.payload }
        },
    },
});


export default LoadingSlice.reducer;