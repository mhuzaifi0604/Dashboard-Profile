import { configureStore } from "@reduxjs/toolkit";
import loginreducer from './Slicer';
export const store = configureStore({
    reducer: {
        loggedin: loginreducer
    }
});