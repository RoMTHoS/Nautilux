import * as types from "../types";

export const getInterventions = () => ({
  type: types.GET_INTERVENTIONS_FETCH,
});

export const createIntervention = (intervention) => ({
  type: types.CREATE_INTERVENTION,
  payload: intervention,
});
