import React, { Component } from 'react';
import Vacncy from './Vacancy_sign'

export default class App extends Component {

  render() {
    return (
      <div className="app">
		        <h1>Let's React Now</h1>
		        <button type="button" className="btn btn-success">GET STARTED!</button>
            <Vacncy has_vacancy={false}/>
	    </div>
    );
  }

}
