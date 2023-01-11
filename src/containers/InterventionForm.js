import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNewIntervention } from "../redux/interventionsSlice";
import moment from "moment";

function InterventionForm() {
  const [interventionName, setInterventionName] = useState("");
  const [description, setDescription] = useState("");
  const [applicant, setApplicant] = useState("");
  const [mail, setMail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const interventions = useSelector(
    (state) => state.interventions.interventions
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = interventions.length + 1;

  function createNewIntervention(e) {
    e.preventDefault();
    const shouldAdding = checkingForm();

    if (shouldAdding) {
      const date = moment().format("YYYY/MM/D hh:mm:ss");
      const newIntervention = {
        id: id,
        created_at: date,
        name: interventionName,
        description: description,
        sender_name: applicant,
        sender_email: mail,
        sender_phone: phoneNumber,
      };
      dispatch(addNewIntervention(newIntervention));
      navigate("/");
    }
  }
  //Verifier que les champs du formulaires soient bien remplis
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

  function navigateToInterventionsList() {
    navigate("/");
  }

  return (
    <div className="w-50 m-auto">
      <div className="between py-3">
        <button
          className="btn btn-white self-start"
          onClick={navigateToInterventionsList}
        >
          Retour
        </button>
        <button
          className="btn btn-yellow self-start"
          onClick={(e) => createNewIntervention(e)}
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
