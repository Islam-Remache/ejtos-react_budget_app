import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../Styles/Currency.css'

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const names = {
        '£':"Pound",
        '$':"Dollar",
        '€':"Euro",
        '₹':"Ruppee"
    }

    const handleSelect = (value)=>{
        console.log(value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });
    }


    
    
    return (


        <label className="alert alert-success label" >Currency :
        <select className="alert alert-success list" id="CurrSelect"       onfocus="this.size=4;"
      onblur="this.size=0;"
      onchange="this.size=1; this.blur()"  onChange={(event)=>handleSelect(event.target.value)}>
            
              <option value='$' name="Dollar" >$ Dollar</option>
              <option value='£' name="Pound" selected>£ Pound</option>
              <option value='€' name="Euro">€ Euro</option>
              <option value='₹' name="Ruppee">₹ Ruppee</option>
        </select>
        
        </label>

    );
};
export default Currency;