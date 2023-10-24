import { createSlice } from "@reduxjs/toolkit";

const makeUpSlice = createSlice({
  name: "Make Up Slice",
  initialState: {
    makeUp: {
      jumlahMakeUp: 10,
      namaBrand: "Lato-lato",
      penerbit: "Sari Roti",
      listBedak: ["Bedak Tabur", "Bedak Foundation", "Bedak Halus"],
    },
  },
  reducers: {
    increment: (state) => {
      state.makeUp.jumlahMakeUp += 1;
    },
    decrement: (state) => {
      state.makeUp.jumlahMakeUp -= 1;
    },
    updateBrand: (state, action) => {
      const { namaBrand, penerbit } = action.payload;
      state.makeUp.namaBrand = namaBrand;
      state.makeUp.penerbit = penerbit;
    },
    addBedak: (state, action) => {
      state.makeUp.listBedak.push(action.payload);
    },
    removeBedak: (state, action) => {
      const bedakToRemove = action.payload;
      state.makeUp.listBedak = state.makeUp.listBedak.filter(
        (bedak) => bedak !== bedakToRemove
      );
    },
    removeAbsurd: (state) => {
      state.makeUp.listBedak.pop();
    },
  },
});

const makeUpReducer = makeUpSlice.reducer;
const {
  increment,
  decrement,
  updateBrand,
  addBedak,
  removeBedak,
  removeAbsurd,
} = makeUpSlice.actions;

export {
  increment,
  decrement,
  updateBrand,
  addBedak,
  removeBedak,
  removeAbsurd,
};
export default makeUpReducer;
