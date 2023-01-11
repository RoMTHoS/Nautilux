import { getInterventionsSuccess } from "../redux/interventionsSlice";
import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";

async function fetchInterventions() {
  const response = await axios.get("http://localhost:3001/interventions", {
    headers: { "content-type": "application/json" },
  });
  return response.data;
}

function* getInterventions() {
  const interventions = yield call(fetchInterventions);
  yield put(getInterventionsSuccess(interventions));
}

export default function* rootSaga() {
  yield takeEvery("interventions/getInterventionsFetch", getInterventions);
}
