import { createSlice } from '@reduxjs/toolkit';
import createShuffledQuilt from '../../utilities/createShuffledQuilt';
import colorChange from '../../utilities/colorChange';

const { shuffledQuilt: initialQuilt, colors: initialColors } =
  createShuffledQuilt(6, 8, 6);

const quiltSlice = createSlice({
  name: 'quilt',
  initialState: {
    quilt: initialQuilt,
    colors: initialColors,
    bgColor: true,
    borderIsOn: true,
    showModal: false,
    justClicked: {},
    toBeSwapped: null,
  },
  reducers: {
    createQuilt(state, action) {
      const { cols, rows, fabrics } = action.payload;
      const { shuffledQuilt, colors } = createShuffledQuilt(
        cols,
        rows,
        fabrics
      );
      state.quilt = shuffledQuilt;
      state.colors = colors;
    },
    changeQuiltColors(state, action) {
      const { num, color } = action.payload;
      const { changedQuilt, changedColors } = colorChange(
        state.quilt,
        state.colors,
        num,
        color
      );
      state.quilt = changedQuilt;
      state.colors = changedColors;
    },
    changeBlockColor(state, action) {
      const { row, block, color } = action.payload;
      state.quilt[row][block].hex = color;
      state.quilt[row][block].num = 0;
    },
    openModal(state) {
      state.showModal = true;
    },
    closeModal(state) {
      state.showModal = false;
    },
    selectBlock(state) {
      const { row, block } = state.justClicked;
      state.quilt[row][block].opacity = 0.33;
      state.showModal = false;
      state.toBeSwapped = { row, block };
    },
    deSelectBlock(state, action) {
      const { row, block } = action.payload;
      state.quilt[row][block].opacity = 1;
      state.toBeSwapped = null;
    },
    setJustClicked(state, action) {
      const { row, block, color, num } = action.payload;
      state.justClicked = { row, block, color, num };
    },
    swapBlocks(state) {
      const { row, block } = state.justClicked;
      const { row: row2, block: block2 } = state.toBeSwapped;
      const temp = state.quilt[row2][block2];
      temp.opacity = 1;
      state.quilt[row2][block2] = state.quilt[row][block];
      state.quilt[row][block] = temp;
      state.toBeSwapped = null;
      state.justClicked = {};
      state.showModal = false;
    },
  },
});

export const {
  createQuilt,
  changeQuiltColors,
  changeBlockColor,
  openModal,
  closeModal,
  selectBlock,
  deSelectBlock,
  setJustClicked,
  swapBlocks,
} = quiltSlice.actions;
export const quiltReducer = quiltSlice.reducer;
