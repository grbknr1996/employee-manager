import {
  createSlice,
  configureStore,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employees: []
  },
  reducers: {
    fetchEmployees: (state, action) => {
      return {
        employees: action.payload
      };
    }
  }
});

export const { fetchEmployees } = employeeSlice.actions;

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    employees: employeeSlice.reducer
  },
  middleware
});

sagaMiddleware.run(saga);

export default store;
