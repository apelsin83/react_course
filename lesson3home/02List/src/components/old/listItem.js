import React, { Component } from 'react';
import Card from './card'
import data from "../../data/MOCK_DATA.json"


export default class ListItemComponent extends React.Component{
    constructor() {
      super()
      this.state = {filt: ''}
    }

     _handleClick(e) {
        console.log(e.target.value); // this is undefined
        this.setState({filt: e.target.value});
    }

    render() {
      return (
        <div>
          <input type="text" name="fname" onChange={this._handleClick.bind(this)}/>
          <ul>
            { data.filter(item => item.first_name.indexOf(this.state.filt) != -1)
                  .map(item =><li key={item.id}><Card dataitem={item}/></li>) }      
          </ul>
        </div>
      )
  }
}