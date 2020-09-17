import React from 'react';
import './Tip.css';

const Tip = (props) => {
  return (
    <div className="cards">
      <h1>{props.titel}</h1>
      <h3>{props.inhalt}</h3>
      <h3>{props.kategorie}</h3>
    </div>
  );
};

export default Tip;
