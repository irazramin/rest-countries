import React from 'react';
import './Country.css';
export default function Country(props) {
    console.log(props.country);
    const {flags,name} = props.country
  return (
    <div className='country'>
      <div>
        <img src={flags.svg} alt='' />
      </div>
      <div>
        <h4>
          Country Name : <small>{name.common}</small>
        </h4>
      </div>
    </div>
  );
}
