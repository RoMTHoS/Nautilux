import React from "react";
import { useSelector } from "react-redux";

function Line() {
  const interventions = useSelector(
    (state) => state.interventionsReducer.interventions
  );
  return (
    <>
      {interventions.map((intervention) => (
        <tr key={intervention.id} style={styles.borderBottom}>
          <th scope="row">{intervention.created_at}</th>
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

const styles = {
  borderBottom: {
    borderBottom: "solid 1px grey",
  },
};

export default Line;
