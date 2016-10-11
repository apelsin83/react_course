import React from 'react'

export default ( props ) => (
    <div className="thumb-box">
		    <img className="thumb" src={props.image_url}
             onClick={::props.on_item_click}/>
	  </div>
  )


// import React, { Component } from 'react';
//
// export default class Thumb extends Component {
//
//   on_thumb_click(){
//     console.log('on_thumb_click')
//     this.props.on_item_click()
//   }
// 	render() {
// 		return (
// 		  <div className="thumb-box">
// 			<img className="thumb" src={this.props.image_url}
//            onClick={::this.props.on_item_click}/>
// 		  </div>
// 		)
// 	}
//
//   static propTypes = { image_url: React.PropTypes.string.isRequired }
// }

// Thumb.propTypes = { image_url: React.PropTypes.string.isRequired };
// Thumb.defaultProps = { image_url: 'http://lorempixel.com/80/80/people/' };


/*
//ES7 Property Initialiazers for Default Props and Prop Types of React component
//-----------------------------------------------------------------------------------------
import React, { Component } from 'react';

export default class Thumb extends Component {

	render() {
		return (
		  <div className="thumb-box">
			<img className="thumb" src={this.props.image_url}/>
		  </div>
		)
	}

	static propTypes = {
        image_url: React.PropTypes.string
    }
    static defaultProps = {
        image_url: 'http://lorempixel.com/80/80/people/'
    }

}

Thumb.propTypes = { image_url: React.PropTypes.string };
Thumb.defaultProps = { image_url: 'http://lorempixel.com/80/80/people/' };
*/


//-------------
// propTypes
//-------------
/*
React.PropTypes.array
React.PropTypes.bool
React.PropTypes.func
React.PropTypes.number
React.PropTypes.object
React.PropTypes.string
*/


//chain any of the above with `isRequired` to make sure
//a warning is shown if the prop isn't provided.
//------------------------------------------------------
//React.PropTypes.func.isRequired


// A Required value of any data type
//-----------------------
//React.PropTypes.any.isRequired


//Anything that can be rendered
//---------------------------------
//React.PropTypes.node


// A React element.
//-----------------------
//React.PropTypes.element


// instance of a class
//-----------------------
//React.PropTypes.instanceOf(Message)


//ensure that your prop is limited to specific values
//--------------------------------------------------------
//React.PropTypes.oneOf(['News', 'Photos'])


// An object that could be one of many types
//---------------------------------------------
/*
React.PropTypes.oneOfType([
  React.PropTypes.string,
  React.PropTypes.number,
  React.PropTypes.instanceOf(Message)
])
*/


// An array of a certain type
//------------------------------
//React.PropTypes.arrayOf(React.PropTypes.number)


// An object with property values of a certain type
//--------------------------------------------------
// React.PropTypes.objectOf(React.PropTypes.number)
