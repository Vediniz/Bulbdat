import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        loading: false,
        bulbdatData: null,
        reloadData: false,
    },
    reducers: {
        ShowLoading: (state, action) => {
            state.loading = true;
        },
        HideLoading: (state, action) => {
            state.loading = false;
        },
        SetBulbdatData: (state, action) => {
            state.bulbdatData = action.payload;
        },
        ReloadData: (state, action) => {
            state.reloadData = action.payload;
        },
    },
});

export default rootSlice.reducer;
export const { ShowLoading, HideLoading, SetBulbdatData, ReloadData } =
    rootSlice.actions;
