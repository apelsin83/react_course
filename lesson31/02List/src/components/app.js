import React, { Component } from 'react';
import List from './listItem'

export default class App extends Component {

  render() {
    return (
      <div className="divScroll">

		        <h1>Let's React Now</h1>
            <List />
	    </div>
    );
  }

}
