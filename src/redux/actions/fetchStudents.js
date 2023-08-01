import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudents = createAsyncThunk('students/fetchStudents', async () => {
    const apiUrl = 'https://micro-service-architecture.onrender.com/students';
    const response = await axios.get(apiUrl);
    return response.data;
});

const initialState = {
    loading: false,
    mystudents: [],
    error: null,
}

const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchStudents.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchStudents.fulfilled, (state, action) => {
            state.loading = false;
            state.mystudents = action.payload;
            state.error = '';
        })
        .addCase(fetchStudents.rejected, (state, action) => {
            state.loading = false;
            state.mystudents = [];
            state.error = action.payload;
        });
    }
});

export default studentSlice.reducer;
