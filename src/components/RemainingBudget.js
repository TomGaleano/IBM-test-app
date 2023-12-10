import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const RemainingBudget = ({ businessBudget }) => {
  const { CartValue, Location } = useContext(AppContext);

  const currentBudget = businessBudget;

  

  return (
  <div className="alert alert-success" role="alert">
    <span>Remaining Budget: {Location}{currentBudget-CartValue}</span>
  </div>
);
};

export default RemainingBudget;
