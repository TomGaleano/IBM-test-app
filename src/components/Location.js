import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Button from 'react-bootstrap/Button';

const Location = () => {
  const { dispatch } = useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = useState('$');

  const handleCurrencyChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCurrency(selectedValue);
    dispatch({
      type: 'CHG_LOCATION',
      payload: selectedValue,
    });
  };

  const options = [
    { value: '$', label: '$ Dollar' },
    { value: '£', label: '£ Pound' },
    { value: '€', label: '€ Euro' },
    { value: '₹', label: '₹ Rupee' },
  ];

  return (

      <select
        value={selectedCurrency}
        onChange={handleCurrencyChange}
        name="Location"
        id="Location"
        style={{
          marginLeft: '10px',
          backgroundColor: '#78eb96', // Color verde
          color: 'white',
          padding: '8px 12px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
  );
};

export default Location;
