import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    name: '',
    regno: '',
    marks: ''
}

const saveSlice = createSlice({
    name: 'save',
    initialState,
    reducers:{
        addStudent: (state, action) => {
            const { name, regno, marks } = action.payload;
            state.name = name;
            state.regno = regno;
            state.marks = marks;
        }
    }
})

export const { addStudent } = saveSlice.actions
export default saveSlice.reducer