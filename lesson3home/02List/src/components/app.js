import React, { Component } from 'react';
import Filter from './filter'
import Details from './details'
import List from './listItems'
import mock from "../../data/MOCK_DATA.json"

export default class App extends Component{
  constructor() {
      super()
      this.state = {data: mock, item: mock[0]}
      this.handleClick = (e) => this._handleFilter(e)
    }

    _handleFilter(data) {
        this.setState({data: data,
                       item: this.state.item});
    }
    
    _handleCardClick(item) {
      this.setState({filt: this.state.filt, item: item});
    }
    render() {
      return (
        <div>
            <Filter filterData={mock} onClickFunction={this._handleFilter.bind(this)}/>
            <hr />
            <div className='parentcss'>
            <Details selectedItem={this.state.item}/>
            <List dataitems={this.state.data} onClickFunction={this._handleCardClick.bind(this)}/>
            </div>
        </div>
      )
  }
}
