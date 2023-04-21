/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import userReducer from './reducers/userReducer';

export default configureStore({
    reducer: {
        counter: counterReducer,
        userReducer: userReducer,
    },
});
