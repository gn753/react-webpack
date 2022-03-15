import { createSlice } from "@reduxjs/toolkit";

interface Props {
  newsSortState: "정렬순" | "인기순" | "최신순";
}

const initialState: Props = {
  newsSortState: "정렬순"
};

const newsSortSlice = createSlice({
  name: "NewsSort",
  initialState,
  reducers: {
    changeNewsOption: (state, action) => {
      state.newsSortState = action.payload;
    }
  }
});

export const { changeNewsOption } = newsSortSlice.actions;

export default newsSortSlice.reducer;
