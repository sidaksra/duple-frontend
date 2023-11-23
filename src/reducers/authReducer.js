import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const authReducer = createReducer(initialState, {
  SIGN_IN: (state, action) => {
    state.user = action.payload;
  }
});

export default authReducer;
