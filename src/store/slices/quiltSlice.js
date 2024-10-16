import { createSlice } from "@reduxjs/toolkit";
import createShuffledQuilt from "../../utilities/createShuffledQuilt";
import colorChange from "../../utilities/colorChange";

const {shuffledQuilt: initialQuilt, colors: initialColors} = createShuffledQuilt(6, 8, 6);

const quiltSlice = createSlice({
    name: 'quilt',
    initialState: {
        quilt: initialQuilt,
        colors: initialColors,
        bgColor: true,
        borderIsOn: true
    },
    reducers: {
        createQuilt(state, action) {
            const { cols, rows, fabrics } = action.payload;
            const { shuffledQuilt, colors } = createShuffledQuilt(cols, rows, fabrics);
            state.quilt = shuffledQuilt;
            state.colors = colors;
        },
        changeQuiltColors(state, action) {
            const { num, color } = action.payload;
            const { changedQuilt, changedColors } = colorChange(state.quilt, state.colors, num, color);
            state.quilt = changedQuilt;
            state.colors = changedColors;
        }
    },
})

export const { createQuilt, changeQuiltColors } = quiltSlice.actions;
export const quiltReducer = quiltSlice.reducer;