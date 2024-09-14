import { createSlice } from '@reduxjs/toolkit';

const PopupSlice = createSlice({
    name: 'popup',
    initialState: {
        loading: false,
        popup: false,
        popup_type: null,
        show: false,
        show_type:null
    },
    reducers: {
        loading: (state, action) => {
            return { ...state, loading: action.payload }
        },
        popup: (state, action) => {
            return { ...state, popup: action.payload.popup, popup_type: action.payload.popup_type }
        },
        show: (state, action) => {
            return { ...state, show: action.payload.show, show_type: action.payload.show_type }
        },
    },
});


export default PopupSlice.reducer;