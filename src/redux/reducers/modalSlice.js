import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ismodalOpen: false,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers:{
        openModal: (state, action) =>{
            state.ismodalOpen = true;
        },
        closeModal: (state, action) =>{
            state.ismodalOpen = false;
        }
    }
})

export const { openModal,closeModal }  = modalSlice.actions
export default modalSlice.reducer