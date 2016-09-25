import React, { Component } from 'react';

export default class App extends Component {

  render() {
    const {onClickFunction} = this.props;
    return (
      <div className="filtercss">
       <p>Robots HUB</p> <input type="text" name="fname" onChange={onClickFunction}/>
     </div>
    );
  }

}
