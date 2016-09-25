import React, { Component } from 'react'
import Thumb from './thumbs'

export default (props) => {
    const item = props.dataitem
    return (
      <div className="ttt">
        <h5> id: {item.id} </h5>  
        <h5> first_name: {item.first_name} </h5>  
        <h5> last_name: {item.last_name} </h5>  
        <h5> email: {item.email} </h5>  
        <h5> country: {item.country} </h5>  
        <h5> description: {item.description} </h5>  
        <h5> country: {item.country} </h5>  
        <h3><Thumb path={item.avatar} /></h3>         
	  </div>
    )
}