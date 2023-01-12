import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Line({ order }) {
  const navigate = useNavigate();

  const interventions = useSelector(
    (state) => state.interventions.interventions
  );

  function filterInterventions() {
    const interventionsClone = [...interventions];
    if (order) {
      return interventionsClone.sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
      );
    } else {
      return interventionsClone.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
    }
  }

  const interventiosnFiltered = filterInterventions();

  function openIntervention(id) {
    navigate(`/intervention/${id}`);
  }

  function formatedMonth(date) {
    const dateFormated = moment(date).format("LL");
    const month = dateFormated.split(" ").splice(0, 1).toString().slice(0, 3);
    return month;
  }

  function formatedDay(date) {
    const dateFormated = moment(date).format("LL");
    const day = dateFormated.split(" ").splice(1, 1).toString().slice(0, -1);
    return day;
  }

  return (
    <>
      {interventiosnFiltered.map((intervention) => (
        <tr
          key={intervention.id}
          className="boder-bottom"
          onClick={() => openIntervention(intervention.id)}
        >
          <th className="date" scope="row">
            <div className="date-container">
              <div className="date-content">
                {formatedDay(intervention.created_at)}
              </div>
              <div className="date-content">
                {formatedMonth(intervention.created_at)}
              </div>
            </div>
          </th>

          <td>
            <div className="bold no-wrap">{intervention.name}</div>
            <div>{intervention.created_at}</div>
          </td>
          <td>{intervention.description}</td>
          <td>{intervention.sender_name}</td>
          <td>
            <div>{intervention.sender_email}</div>
            <div>{intervention.sender_phone}</div>
          </td>
        </tr>
      ))}
    </>
  );
}

export default Line;
