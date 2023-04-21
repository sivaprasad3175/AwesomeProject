/* eslint-disable prettier/prettier */
export const ADD_USER = 'ADD_USER';
export const EDIT_USER = 'EDIT_USER';
export const DELETE_USER = 'DELETE_USER';

export const addUser = (user) => ({
    type: ADD_USER,
    payload: user,
});

export const editUser = (user) => ({
    type: EDIT_USER,
    payload: user,
});

export const deleteUser = (userId) => ({
    type: DELETE_USER,
    payload: userId,
});


