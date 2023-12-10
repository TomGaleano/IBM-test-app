import React, { useContext, useState } from "react";
import NumericInput from "react-numeric-input";
import { AppContext } from "../context/AppContext";
import RemainingBudget from "./RemainingBudget"; // Import the RemainingBudget component
import CartValue from "./CartValue";



const BusinessBudget = () => {

    
  const { dispatch, CartValue, Location, expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += (item.unitprice * item.quantity));
}, 0);

  const [businessBudget, setBusinessBudget] = useState(0);

  const handleChangeBusinessBudget = (value) => {
    if (value < CartValue) {
      alert(`Business budget cannot be less than spending. Please enter a budget at least ${Location}${CartValue}`);
      return;
    } else if (value > 200000) {
      alert(`Business budget cannot be greater than ${Location}200000. Please enter a budget below ${Location}200001`);
      return;
    } else {
      setBusinessBudget(parseInt(value));
      dispatch({ type: "UPDATE_BUSINESS_BUDGET", payload: value });
    }
    
  };



  return (
    <div  style={{ display: "flex" }}>
      <div className="alert alert-secondary" role="alert">
        <label htmlFor="businessBudget">Budget: {Location}</label>
        <NumericInput
          min={CartValue}
          max={200000}
          value={businessBudget}
          onChange={handleChangeBusinessBudget}
        />
  
        
        
      </div>

      <RemainingBudget businessBudget={businessBudget} />
      <div className='alert alert-primary'>
    <span>Spent so far: {Location}{totalExpenses}</span>
</div>
    </div>
    
    
  );
};

export default BusinessBudget;
