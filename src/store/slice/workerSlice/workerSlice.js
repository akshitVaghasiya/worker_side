import { createSlice } from "@reduxjs/toolkit";

const wokerSlice = createSlice({
  name: "worker",
  initialState: {
    loading: true,
    isAuthenticated: false,
  },
  reducers: {
    LOGIN_REQUEST: (state, action) => {
      return {
        loading: true,
        isAuthenticated: false,
      };
    },
    LOGIN_SUCCESS: (state, action) => {
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        worker: action.payload,
      };
    },
    LOGIN_FAIL: (state, action) => {
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        worker: null,
        error: action.payload,
      };
    },
    LOAD_ADMIN_REQUEST: (state, action) => {
      return {
        loading: true,
        isAuthenticated: false,
      };
    },
    LOAD_ADMIN_SUCCESS: (state, action) => {
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        worker: action.payload,
      };
    },
    LOAD_ADMIN_FAIL: (state, action) => {
      return {
        loading: false,
        isAuthenticated: false,
        worker: null,
        error: action.payload,
      };
    },
    LOGOUT_SUCCESS: (state, action) => {
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        worker: null,
        error: action.payload,
      };
    },
    LOGOUT_FAIL: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    CLEAR_ERRORS: (state, action) => {
      return {
        ...state,
        error: null,
      };
    },
  },
});

export const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_ADMIN_REQUEST,
  LOAD_ADMIN_SUCCESS,
  LOAD_ADMIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  CLEAR_ERRORS,
} = wokerSlice.actions;
export default wokerSlice.reducer;
