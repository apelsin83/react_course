import React, { Component } from 'react';
import MainRobot from "./MainRobot";
import { 
	Router, 
	Route, 
	Link, 
	IndexRoute, 
	browserHistory, 
	hashHistory, 
	Redirect,
	withRouter
} from 'react-router'


const Comtainer = (props) => <div className='conatiner'><Links />{props.children}</div>
const Main = () => <div className='main'><h1>Shalom mazafaka</h1></div>
const About = () => <div className='about'><MainRobot /></div>
const Contact = () => <div className='contact'><h1>Bye mazafaka</h1></div>

const Links = () =>	
	<nav>
		<Link to="/" className="link">Home</Link>&nbsp;
		<Link to="/about" className="link">About</Link>&nbsp;
		<Link to="/contact" className="link">Contact</Link>
	</nav>	

export default class App extends Component {

  render() { 
    return (
      <Router history={hashHistory}> 
          <Route path="/" component={Comtainer}>
            <IndexRoute component={Main}></IndexRoute>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
          </Route>
	    </Router>
    )
  }
}


// export default class App extends Component {

//   render() {
//     return (
//       <div >
//         <MainRobot />
// 	  </div>
//     );
//   }
// }
