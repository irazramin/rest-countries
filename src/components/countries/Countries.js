import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
import './Countries.css';
export default function Countries() {
    const[countries,setCountries] = useState([]);

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])
  return (
    <div>
        <h2>Rest Countries</h2>
      <div className='countries-container'>
        {countries.map((country) => (
          <Country key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}
