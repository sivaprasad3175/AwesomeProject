/* eslint-disable prettier/prettier */
import { ADD_USER, EDIT_USER, DELETE_USER } from '../actions/userActions';

const initialState = {
    users: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        case EDIT_USER:
            console.log(action.payload, 'EDIT_USER');

            const updatedUsers = state.users.map(user => {
                if (user.id === action.payload.id) {
                    return action.payload;
                }
                return user;
            });
            return {
                ...state,
                users: updatedUsers,
            };
        case DELETE_USER:
            const filteredUsers = state.users.filter(
                user => user.id !== action.payload,
            );
            return {
                ...state,
                users: filteredUsers,
            };
        default:
            return state;
    }
};

export default userReducer;
