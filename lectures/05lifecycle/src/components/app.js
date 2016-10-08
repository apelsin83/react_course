import React, { Component } from 'react';
import Name_input from './Name_input';

export default class App extends Component {
	
	constructor(props){
		super(props)
		this.state = { booked_items : 0 }
	}
	book_item(){
		let booked = this.state.booked_items + 1
		this.setState({ booked_items : booked})
	}
	render() {
		return (
		  <div className="app">
			<img src="/images/Lifecycle_Circle.png" className="lifecycle_image"/>
			<h1 className="title">React.js Component Lifecycle</h1>
			<button type="button" className="btn btn-success" onClick={this.book_item.bind(this)}>Book Item!</button>
			<h3>Items booked: {this.state.booked_items}</h3>	
			<br/>
			<br/>
			<Name_input/>
		  </div>
		);
	}
}

