import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    text: '',
}

const textSlice = createSlice({
    name: 'inputtext',
    initialState,
    reducers:{
        getInputText: (state, action) => {
            state.text = action.payload
        }
    }
})

export const { getInputText } = textSlice.actions
export default textSlice.reducer
