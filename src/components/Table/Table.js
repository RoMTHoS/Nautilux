import React, { useState } from "react";
import Arrow from "./Arrow";
import Line from "./Line";

function Table(props) {
  const [order, setOrder] = useState(false);

  return (
    <>
      <table className="table table-borderless">
        <thead className="table-secondary boder-bottom">
          <tr>
            <th className="date rounded-left-top" scope="col">
              DATE
              <Arrow order={order} setOrder={setOrder} />
            </th>
            <th scope="col">NOM</th>
            <th scope="col">DESCRIPTION</th>
            <th scope="col">DEMANDEUR</th>
            <th scope="col" className=" rounded-right-top">
              COORDONNÉES
            </th>
          </tr>
        </thead>
        <tbody>
          <Line order={order} />
          <Line order={order} />
          <Line order={order} />
          <Line order={order} />
        </tbody>
      </table>
    </>
  );
}

const styles = {
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
