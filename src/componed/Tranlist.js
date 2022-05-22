import React, { useContext } from "react";
import { Fer } from "./Fer";

import { GlobalContext } from "../context/GlobalState";

export const Tranlist = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Fer key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
