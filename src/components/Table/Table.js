import React from "react";
import { useParams } from "react-router-dom";
import Line from "./Line";

function Table(props) {
  const { interventionId } = useParams();

  const un = {
    first: "Mark",
    last: "Otto",
    handle: "@mdo",
  };
  const deux = {
    first: "Mark",
    last: "Otto",
    handle: "@mdo",
  };
  const trois = {
    first: "Mark",
    last: "Otto",
    handle: "@mdo",
  };
  const quatre = {
    id: 1,
    created_at: "2020-04-12 14:53:09",
    name: "Nid de poule",
    description:
      "Le nid de poules sur la route des prés devient dangereux. Pourriez-vous intervenir pour le reboucher ?",
    sender_name: "Romuald Gauthier",
    sender_email: "romuald_gautier@gmail.com",
    sender_phone: "0648736255",
  };

  return (
    <>
      <table className="table table-borderless" style={styles.table}>
        <thead className="table-secondary" style={styles.borderBottom}>
          <tr>
            <th scope="col" style={styles.leftCorner}>
              DATE
            </th>
            <th scope="col">NOM</th>
            <th scope="col">DESCRIPTION</th>
            <th scope="col">DEMANDEUR</th>
            <th scope="col" style={styles.rightCorner}>
              COORDONNÉES
            </th>
          </tr>
        </thead>
        <tbody>
          <Line info={un} />
          <Line info={deux} />
          <Line info={trois} />
          <Line info={quatre} />
        </tbody>
      </table>
    </>
  );
}

const styles = {
  table: {
    fontSize: "0.75rem",
    captionSide: "top",
  },
  borderBottom: {
    borderBottom: "solid 1px grey",
  },
  leftCorner: {
    borderTopLeftRadius: "25px",
  },
  rightCorner: {
    borderTopRightRadius: "25px",
  },
};

export default Table;
