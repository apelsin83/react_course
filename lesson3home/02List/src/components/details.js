import React, { Component } from 'react';

export default class App extends Component {

  render() {
    const {selectedItem: item} = this.props
    return (
      
      <div className="detailscss">
      { (item !="" && item != undefined) ? 
          <ul>
            <li> id: {item.id} </li>  
            <li> first_name: {item.first_name} </li>  
            <li> last_name: {item.last_name} </li>  
            <li> email: {item.email} </li>  
            <li> country: {item.country} </li>  
            <li> description: {item.description} </li>  
            <li> country: {item.country} </li>  
            <h3><img src={item.avatar.replace('size=80x80', 'size=320x320')}/></h3>    
          </ul>    
        : null
      }
      </div>
    );
  }

}
