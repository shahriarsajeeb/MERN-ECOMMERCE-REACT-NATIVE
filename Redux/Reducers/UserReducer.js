import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(initialState, {
  userLoginRequest: state => {
    state.loading = true;
    state.isAuthenticated = false;
  },
  userCreateRequest: state => {
    state.loading = true;
    state.isAuthenticated = false;
  },
  userLoadRequest: state => {
    state.loading = true;
    state.isAuthenticated = false;
  },
  userLoginSuccess: (state = {user: {}}, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  userCreateSuccess: (state = {user: {}}, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  userLoadSuccess: (state = {user: {}}, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  userLogOutSucess: (state = {user: {}}) => {
    state.loading = false;
    state.user = null;
    state.isAuthenticated = false;
  },
  userLoginFalse: (state = {user: {}}, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.user = null;
    state.error = action.payload;
  },
  userCreateFail: (state = {user: {}}, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.user = null;
    state.error = action.payload;
  },
  userLogOutFail: state => {
    state.loading = false;
    state.error = action.payload;
  },
  userLoadFailed: (state = {user: {}}, action) => {
    (state.loading = false), (state.isAuthenticated = false);
    state.user = null;
    state.error = action.payload;
  },
});

export const forgotPasswordReducer = createReducer(initialState, {
    forgotPasswordRequest: (state) =>{
        state.loading = true;
        state.error = null;
    },
    forgotPasswordSuccess: (state = {}, action) =>{
        state.loading = false;
        state.message = action.payload;
    },
    forgotPasswordFailed: (state = {}, action) =>{
        state.loading = false;
        state.error = action.payload;
    }
});
