import React, { useContext, useState } from "react";
import NumericInput from "react-numeric-input";
import { AppContext } from "../context/AppContext";

const BusinessBudget = () => {
  const [businessBudget, setBusinessBudget] = useState(0);

  const { CartValue, Location } = useContext(AppContext);

  const handleChangeBusinessBudget = (value) => {
    if (value < CartValue) {
      alert(`Business budget cannot be less than cart value. Please enter a budget at least ${Location}${CartValue}`);
      return;
    } else if (value > 200000) {
      alert(`Business budget cannot be greater than ${Location}200000. Please enter a budget below ${Location}200001`);
      return;
    }
    setBusinessBudget(parseInt(value));
  };



  return (
    <div className="alert alert-secondary" role="alert">
      <label htmlFor="businessBudget">Budget: {Location}</label>
      <NumericInput
        min={CartValue}
        max={200000}
        value={businessBudget}
        onChange={handleChangeBusinessBudget}
      />
    </div>
    
  );
};

export default BusinessBudget;
