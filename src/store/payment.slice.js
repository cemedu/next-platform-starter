import { createSlice } from '@reduxjs/toolkit';

const PaymentSlice = createSlice({
    name: 'payment',
    initialState: {
        payment: {},
    },
    reducers: {
        payment: (state, action) => {
            return { ...state, payment: action.payload }
        },
    },
});


export default PaymentSlice.reducer;