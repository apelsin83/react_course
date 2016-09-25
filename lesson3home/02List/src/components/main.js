import React, { Component } from 'react'
import Filter from './filter'
import Details from './details'
import List from './listItems'
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

    _handleCardClick(item, e) {
      console.log(item.id)
    }
    render() {
      return (
        <div>
            <Filter onClickFunction={this._handleClick.bind(this)}/>
            <hr />
            <div className='parentcss'>
            <Details />
            <List dataitems={data.filter(item => item.first_name.indexOf(this.state.filt) != -1)} onClickFunction={this._handleCardClick.bind(this, item)}/>
            </div>
        </div>
      )
  }
}