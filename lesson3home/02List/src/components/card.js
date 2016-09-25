import React, { Component } from 'react';

export default class App extends Component {

  render() {
    const {dataitem: item} = this.props
    return (
      <div id={item.id} className="cardcss">
      <ul>
        <li> id: {item.id} </li>  
        <li> first_name: {item.first_name} </li>  
        <li> last_name: {item.last_name} </li>  
        <li> email: {item.email} </li>  
        <li> country: {item.country} </li>  
        <li> description: {item.description} </li>  
        <li> country: {item.country} </li>  
        <h3><img src={item.avatar}/></h3>    
        </ul>     
     </div>
    );
  }

}
