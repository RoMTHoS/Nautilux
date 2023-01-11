import Table from "../components/Table/Table";
import { useNavigate } from "react-router-dom";

function InterventionsList() {
  const navigate = useNavigate();

  function navigateToInterventionForm() {
    navigate("/create");
  }
  return (
    <div className="content-container">
      <div className="header-table">
        <button className="btn btn-yellow" onClick={navigateToInterventionForm}>
          Créer une intervention
        </button>
      </div>
      <Table />
    </div>
  );
}

export default InterventionsList;
