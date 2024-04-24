import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    currentSectionIndex: 0,
};

export const section = createSlice({
    name: "section",
    initialState,
    reducers: {
        setCurrentSectionIndex: (state, action) => {
            state.currentSectionIndex = action.payload;
        },
    },
});

export const { setCurrentSectionIndex } = section.actions;

export default section.reducer;
