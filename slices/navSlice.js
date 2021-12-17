import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    expectedTime: null,
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload
        },
        setDestination: (state, action) => {
            state.destination = action.payload
        },
        setExpectedTime: (state, action) => {
            state.expectedTime = action.payload
        }
    }
})

export const { setOrigin, setDestination, setExpectedTime } = navSlice.actions;

export const selectOrigin = state => state.nav.origin;
export const selectDestination = state => state.nav.destination;
export const selectExpectedTime = state => state.nav.expectedTime;

export default navSlice.reducer;