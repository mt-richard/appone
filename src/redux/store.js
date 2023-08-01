import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './reducers/modalSlice'
import saveReducer from './actions/saveSlice'
import textReducer from './reducers/textSlice'
import studentReducer from './actions/fetchStudents'

export const store = configureStore({
    reducer:{
        modal:modalReducer,
        inputtext: textReducer,
        students: studentReducer,
        save: saveReducer

    }
})