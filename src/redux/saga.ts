import { call, takeEvery, put } from "redux-saga/effects";
import { fetchEmployees } from "./store";
import { sagaActions } from "./sagaActions";
import { fetchEmployee } from "./api";


export function* fetchEmployeesSaga():any {
  try {
    let result = yield call(fetchEmployee);
    yield put(fetchEmployees(result.data));
  } catch (e) {
    yield put({ type: "EMPLOYEES_FETCH_FAILED" });
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_EMPLOYEES_SAGA, fetchEmployeesSaga);
}
