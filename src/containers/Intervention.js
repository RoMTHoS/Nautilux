import React from "react";

function Intervention() {
  return (
    <div className="m-auto" style={styles.container}>
      <div style={styles.buttonContainer}>
        <button className="btn btn-primary" style={styles.button}>
          Retour
        </button>
      </div>
      <div style={styles.intervention}>
        <h4 className="bold">Nid de poules </h4>
        <div style={styles.content}>
          <div className="bold">DESCRIPTION</div>
          <div>
            Le nide de poules sur la route des près devient dangereux.
            Pourriez-vous intervenir pour le revboucher ?
          </div>
        </div>
        <div style={styles.content}>
          <div className="bold">DEMANDEUR</div>
          <div className="bold">Romuald Gauthier</div>
          <div>romual_gauthier@gmail.com</div>
          <div>06 42 75 98 85 </div>
        </div>
      </div>
    </div>
  );
}

export default Intervention;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttonContainer: {
    width: "50%",
    padding: "1em 0",
  },
  button: {
    alignSelf: "flex-start",
  },
  intervention: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "50%",
    padding: "1em",
    borderRadius: "15px",
    border: "3px solid #f1f1f1",
  },
  content: {
    marginBottom: "0.5em",
  },
};
