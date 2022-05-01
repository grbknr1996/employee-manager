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
    employees: [],
  },
  reducers: {
    fetchEmployees: (state, action) => {
      return {
        ...state,
        employees: action.payload
      };
    },
    deleteEmployeeStore:(state,action)=>{
      state.employees = state.employees.filter(i => i['id'] !== action.payload)
     return state
    },
    updateEmployeeStore: (state, action) => {
      state.employees = state.employees.map(i => i['id'] === action.payload.id ? action.payload : i) as never;
      return state
    },
  }
});

export const { fetchEmployees,deleteEmployeeStore,updateEmployeeStore } = employeeSlice.actions;

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
