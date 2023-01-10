import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createIntervention } from "../actions/index";
import { useDispatch } from "react-redux";
import { CREATE_INTERVENTION } from "../types";
import { useSelector } from "react-redux";

function InterventionForm() {
  const [interventionName, setInterventionName] = useState("");
  const [description, setDescription] = useState("");
  const [applicant, setApplicant] = useState("");
  const [mail, setMail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const dispatch = useDispatch();

  const interventions = useSelector(
    (state) => state.interventionsReducer.interventions
  );

  function creteNewIntervention(e) {
    e.preventDefault();
    const shouldAdding = checkingForm();

    if (shouldAdding) {
      const newInterventions = [
        ...interventions,
        {
          create_at: Date.now(),
          name: interventionName,
          description: description,
          sender_name: applicant,
          sender_email: mail,
          sender_phone: phoneNumber,
        },
      ];
      dispatch(
        createIntervention({
          type: CREATE_INTERVENTION,
          payload: newInterventions,
        })
      );
    }
  }
  //Verifier que les champs du formulairs soient bien rempli
  function checkingForm() {
    if (interventionName === "") {
      alert("Veuillez indiquer un titre pour l'intervention");
      return false;
    }
    if (description === "") {
      alert("Veuillez indiquer une description pour l'intervention");
      return false;
    }
    if (applicant === "") {
      alert("Veuillez indiquer la personne qui demande l'intervention");
      return false;
    }
    if (mail === "") {
      alert("Veuillez indiquer l'email du demandeur.");
      return false;
    }
    if (phoneNumber === "") {
      alert("Veuillez indiquer le numéro de téléphone du demandeur");
      return false;
    }
    return true;
  }

  return (
    <div className="w-50 m-auto">
      <div className="between" style={styles.buttonContainer}>
        <button className="btn btn-primary" style={styles.button}>
          <Link to="/">Retour</Link>
        </button>
        <button
          className="btn btn-primary"
          style={styles.button}
          onClick={(e) => creteNewIntervention(e)}
        >
          Créer
        </button>
      </div>
      <form>
        <div className="form-group">
          <label for="name">NOM DE L'INTERVENTION</label>
          <input
            type="email"
            className="form-control"
            id="name"
            placeholder="Nom"
            onChange={(e) => setInterventionName(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="description">DESCRIPTION</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div class="form-group">
          <label for="applicant">DEMANDEUR</label>
          <input
            type="email"
            className="form-control"
            id="applicant"
            placeholder="Nom Prénom"
            onChange={(e) => setApplicant(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="mail">EMAIL</label>
          <input
            type="email"
            className="form-control"
            id="mail"
            placeholder="email@domain.fr"
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="phoneNumber">TÉLÉPHONE</label>
          <input
            type="email"
            className="form-control"
            id="phoneNumber"
            placeholder="00 00 00 00 00"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default InterventionForm;

const styles = {
  buttonContainer: {
    padding: "1em 0",
  },
  button: {
    alignSelf: "flex-start",
  },
};
