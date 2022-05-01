import {  takeEvery, put } from "redux-saga/effects";
import { fetchEmployees ,deleteEmployeeStore,updateEmployeeStore} from "./store";
import { sagaActions } from "./sagaActions";
import { deleteEmployee, fetchEmployee, updateEmployee } from "./api";


export function* fetchEmployeesSaga():any {
  try {
    const users = yield fetchEmployee()
    yield put(fetchEmployees(users.data))
  } catch (e) {
    yield put({ type: "EMPLOYEES_FETCH_FAILED" });
  }
}

export function* deleteEmployeeSaga(action:any):any{
  try {
    yield  deleteEmployee(action.id);
    yield put(deleteEmployeeStore(action.id));
    
  } catch (error) {
     yield put({ type: "EMPLOYEE_DELETE_FAILED" });
  }
}

export function* updateEmployeeSaga(action:any):any{
  try {
  
    yield updateEmployee(action.id,action.employee)
    yield put(updateEmployeeStore(action.employee))

  } catch (error) {
     yield put({ type: "EMPLOYEE_UPDATE_FAILED" });
  }
}



export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_EMPLOYEES_SAGA, fetchEmployeesSaga);
  yield  takeEvery(sagaActions.DELETE_EMPLOYEE_SAGA,deleteEmployeeSaga);
   yield  takeEvery(sagaActions.UPDATE_EMPLOYEE_SAGA,updateEmployeeSaga);
}

