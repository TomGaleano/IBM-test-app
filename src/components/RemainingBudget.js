import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const RemainingBudget = () => {
  const { CartValue, Location, businessBudget } = useContext(AppContext);

  const [remainingBudget, setRemainingBudget] = useState(businessBudget - CartValue);

  useEffect(() => {
    setRemainingBudget(businessBudget - CartValue); // Update based on businessBudget
  }, [businessBudget, CartValue]); // Ensure both are dependencies
  

  return (
  <div className="alert alert-success" role="alert">
    <span>Remaining Budget: {Location}{remainingBudget}</span>
  </div>
);
};

export default RemainingBudget;
