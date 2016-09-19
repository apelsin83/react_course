import React, { Component } from 'react';

export default (props) => {
    return (
      <div className="ttt">
        <h2> Tzela </h2>  
        <h3>{props.has_vacancy? "Vacancy": "No Vacancy"}</h3>         
	  </div>
    )
}