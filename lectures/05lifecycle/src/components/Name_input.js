import React, { Component } from 'react';

export default class Name_input extends Component {
	//--------------
	//  initialize
	//--------------
	constructor(props){
		console.log('constructor - Name_input - ')
		super(props)
		this.state = { your_name : '' }
	}
	//--------------
	//  mounting
	//--------------
	componentWillMount(){
		console.log('component Will Mount - Name_input - ')
		//Before rendering (no DOM yet)
	}
	componentDidMount(){
		console.log('component Did Mount - Name_input - ')
		//After rendering - DOM is available
	}
	//  Update 
	componentWillReceiveProps(nextProps){
		console.log('component Will Receive Props - Name_input ')
		// not called for the initial render
		// Invoked when the parent component is changed
	}
	shouldComponentUpdate(nextProps, nextState){
		console.log('should Component Update - Name_input - ')
		return true
		//always called before the render method 
		//enables to define if a re-rendering is needed 
		//or can be skipped. 
		//This method is never called on initial rendering. 
		//A boolean value must be returned.
	}
	componentWillUpdate(nextProps, nextState){
		console.log('component Will Update - Name_input - ')
		//gets called as soon as the the shouldComponentUpdate returned true
		//Any state changes via this.setState are not allowed 
		//this method should be strictly used to prepare for an upcoming update 
		//not trigger an update itself.
	}
	componentDidUpdate(prevProps, prevState){
		console.log('component Did Update - Name_input - ')
		//is called after the render method. 
		// Similar to the componentDidMount, this method can be used 
		// to perform DOM operations after the data has been updated.
	}
	//------------------------
	//  destroy / unmounting
	//------------------------
	componentWillUnmount(){
		//Clean up your DOM related stuff here...
	}
	//------------------------------------------------------
	update_answer(event){
		//custom method...
		this.setState({ your_name : event.target.value})
	}
	
	render() {
		console.log('render - Name_input - ')
		//render is called once on mounting and on each update...
		return (
		  <div className="app">
			<h1 className="title">What is your name?</h1>
			<input type="text" className="form-control" onChange={this.update_answer.bind(this)}/>
			<h3>Your input: {this.state.your_name}</h3>
		  </div>
		);
	}
}