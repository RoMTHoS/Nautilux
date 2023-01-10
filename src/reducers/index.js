import { combineReducers } from "redux";

import * as types from "../types";

export const interventionsReducer = (state = { interventions: [] }, action) => {
  switch (action.type) {
    case types.GET_INTERVENTIONS_SUCCESS:
      return { ...state, interventions: action.interventions };
    case types.CREATE_INTERVENTION:
      console.log(action.payload);
      console.log(action.newInterventions);
      return [...state.interventions, action.payload];
    default:
      return state;
  }
};

export default () =>
  combineReducers({
    interventionsReducer,
  });
