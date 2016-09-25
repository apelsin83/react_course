import React, { Component } from 'react';
import Card from './card'

export default class App extends Component {

  render() {
    const {dataitems, onClickFunction} = this.props;
    return (
      <div className="listcss">
        <ul>
            {dataitems.map(item => <li key={item.id} onClick={onClickFunction}><Card dataitem={item}/></li>)}     
          </ul>

     </div>
    );
  }

}
