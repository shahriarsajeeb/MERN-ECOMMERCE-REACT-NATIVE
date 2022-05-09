import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
};

export const productsReducer = createReducer(initialState, {
  allProductRequest: state => {
    state.loading = true;
  },
  allProductSuccess: (state, action) => {
    (state.loading = false),
      (state.products = action.payload.products),
      (state.productsCount = action.payload.productsCount);
    state.resultPerPage = action.payload.resultPerPage;
    state.filteredProductsCount = action.payload.filteredProductsCount;
  },
  allProductFail:(state,action) => {
    state.loading = false;
    state.error = action.payload;
  }
});

