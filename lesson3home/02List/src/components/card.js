import React, { Component } from 'react';

export default class App extends Component {

  render() {
    const {dataitem: item, onClickCard} = this.props
    return (
      <div id={item.id} className="cardcss" onClick={onClickCard}>
        <h3><img src={item.avatar}/> first_name: {item.first_name}</h3>   
     </div>
    );
  }

}
