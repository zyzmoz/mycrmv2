import { ReactElement } from "react";
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"


export interface ModalState {
  isOpen: boolean;
  modalId: string | null;
}

const initialState: ModalState = {
  isOpen: false,
  modalId: null
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state, action: PayloadAction<string>) => {
      console.log('CLICK = OPEN')
      state.isOpen = true;
      state.modalId = action.payload;
    },
    close: (state) => {
      console.log('CLICK = CLOSE')
      state.isOpen = false;
      state.modalId = null;
    }
  }
})

export const { open, close } = modalSlice.actions;
export default modalSlice.reducer;