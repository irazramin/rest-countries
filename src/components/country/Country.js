import React from 'react';
import './Country.css';
export default function Country(props) {
    console.log(props.country);
    const {flags,name,population,area,region} = props.country
  return (
    <div className='country'>
      <div>
        <img src={flags.svg} alt='' />
      </div>
      <div>
        <h4>
          Country Name : <i>{name.common}</i>
        </h4>
        <p>
          Population : <b>{population}</b>
        </p>
        <p>
          Area : <b> {area}</b>
        </p>
        <p>
          Region : <b> {region}</b>
        </p>
      </div>
    </div>
  );
}
