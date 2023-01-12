import Table from "../components/Table/Table";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function InterventionsList() {
  const navigate = useNavigate();

  const interventions = useSelector(
    (state) => state.interventions.interventions
  );

  function navigateToInterventionForm() {
    navigate("/create");
  }

  const numberOfIntervention = interventions.length * 3;

  return (
    <div className="content-container">
      <div className="header-table">
        <button className="btn btn-yellow" onClick={navigateToInterventionForm}>
          Créer une intervention
        </button>
        <div className="intervention-number">
          <span>{numberOfIntervention}</span> interventions
        </div>
      </div>
      <Table />
    </div>
  );
}

export default InterventionsList;
