import { getInterventionsSuccess } from "../redux/interventionsSlice";
import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";

function formatedDate(date) {
  const day = date.split(" ").slice(0, 1);
  const hours = date.split(" ").slice(1);

  const newHours = hours[0].split(":").slice(0, 2).join(":");

  const newDate = day + " " + newHours;

  return newDate;
}

async function fetchInterventions() {
  const response = await axios.get("http://localhost:3001/interventions", {
    headers: { "content-type": "application/json" },
  });
  const data = response.data;

  data.forEach((inter) => {
    inter.created_at = formatedDate(inter.created_at);
  });

  return data;
}

function* getInterventions() {
  const interventions = yield call(fetchInterventions);
  yield put(getInterventionsSuccess(interventions));
}

export default function* rootSaga() {
  yield takeEvery("interventions/getInterventionsFetch", getInterventions);
}
