import { takeLatest, all, call, put } from "redux-saga/effects";
import axios from "axios";
import { GET_INTERVENTIONS_FETCH, GET_INTERVENTIONS_SUCCESS } from "../types";

async function fetchInterventions() {
  const response = await axios.get("http://localhost:3001/interventions", {
    headers: { "content-type": "application/json" },
  });
  return response.data;
}

function* getInterventions(action) {
  const interventions = yield call(fetchInterventions);
  yield put({ type: GET_INTERVENTIONS_SUCCESS, interventions });
}

export default function* rootSaga() {
  yield all([takeLatest(GET_INTERVENTIONS_FETCH, getInterventions)]);
}
