import React, { Component } from 'react';
import mock from '../data/MOCK_DATA.json';
import List from './List';
import Filter from './Filter';
import Profile from './Profile';

export default class App extends Component {

   constructor(props){
      super(props)
      this.state = {
          displayed_list  : mock,
          profile_data    : mock[0]
      }
   }
   update_list_state(filtered_list){
        console.log('update_list_state',filtered_list.length)
        this.setState({
            ...this.state,
    			  displayed_list: filtered_list
    		})
   }
   update_profile(item){
      console.log('update_profile',item)
      this.setState({
        ...this.state,
        profile_data: item
      })
   }
  render() {
    return (
      <div className="app">
        <h1 className="app_header">Robots Hub</h1>
        <div className="top_box">
            <h4>Filtered by First name: {this.state.displayed_list.length}</h4>
            <Filter className="filter" list_data={mock} on_filter={::this.update_list_state}/>
        </div>
        <div className="content-box">
            <Profile className="profile" data={this.state.profile_data}/>
            <List className="top-list"
                  list_data={this.state.displayed_list}
                  item_click={::this.update_profile}/>
        </div>
	  </div>
    );
  }
}
