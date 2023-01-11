import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function Intervention() {
  const { interventionId } = useParams();
  const navigate = useNavigate();

  const interventions = useSelector(
    (state) => state.interventions.interventions
  );

  function findIntervention() {
    const intervention = interventions.filter(
      (inter) => Number(inter.id) === Number(interventionId)
    );
    return intervention[0];
  }

  const intervention = findIntervention();

  console.log(intervention);

  function navigateToInterventionsList() {
    navigate("/");
  }

  return (
    <div className="column items-center">
      <div className="w-50 py-3">
        <button
          className="btn btn-white self-start"
          onClick={navigateToInterventionsList}
        >
          Retour
        </button>
      </div>
      <div className="w-50 column items-start p-3 b-3-grey br-15">
        <h4 className="bold mb-4">{intervention.name}</h4>
        <div className="mb-4">
          <div className="bold">DESCRIPTION</div>
          <div>{intervention.description}</div>
        </div>
        <div>
          <div className="bold">DEMANDEUR</div>
          <div className="bold">{intervention.sender_name}</div>
          <div>{intervention.sender_email}</div>
          <div>{intervention.sender_phone}</div>
        </div>
      </div>
    </div>
  );
}

export default Intervention;
