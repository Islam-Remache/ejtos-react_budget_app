import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Budget = () => {
    const { currency } = useContext(AppContext);
    const value = `Currency ${currency}`
    
    return (
      <div>
        <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
              <option defaultValue value={value} name="Currency">Add</option>
        <option value="Reduce" name="Reduce">Reduce</option>
        </select>
    </div>
    );
};
export default Budget;
