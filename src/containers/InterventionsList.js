import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getInterventions } from "../actions/index";
import Table from "../components/Table/Table";

function InterventionsList() {
  const dispatch = useDispatch();

  //Récupérer la liste des interventions
  useEffect(() => {
    dispatch(getInterventions());
  }, []);

  function showIntervention() {}

  return (
    <div className="content-container">
      <div style={styles.headerTable}>
        <button
          className="btn btn-primary"
          style={styles.button}
          onClick={showIntervention}
        >
          <Link to="/create">Créer une intervention</Link>
        </button>
      </div>
      <Table />
    </div>
  );
}

export default InterventionsList;

const styles = {
  headerTable: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
  },
  button: {
    backgroundColor: "#FFD500",
  },
};
