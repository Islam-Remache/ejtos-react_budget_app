import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Budget = () => {
    const { budget , expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    console.log(expenses)
    const ShowError = (errorString) =>{
        toast.error(
            errorString,
            {
              position: 'top-center',
              autoClose: false,
              closeOnClick: true,
              
            }
          );
    }

    const handleBudgetChange = (event) => {
        if(event.target.value > 20000){
            ShowError('The budget value cannot exceed 20000');

        }else{
            if(event.target.value < totalExpenses){
                ShowError('You cannot reduce the budget value lower than the spending');
            }else{
                setNewBudget(event.target.value);

            }

        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} max='20000' onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
