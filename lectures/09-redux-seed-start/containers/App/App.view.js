import React, { Component, PropTypes } from 'react'
//import { connect } from 'react-redux'

//import Counter 		from '../../components/Counter/Counter.view'
//import DataCruncher from '../../components/DataCruncher/DataCruncher.view'

import css from './App.css'

class App extends Component {
  constructor(props) {
    super(props)
	//console.log('dispatch: ',this.props.dispatch)
  }
    
  render() {
	const {dispatch,counter,dataCruncher} = this.props
    return (
      <div className={css.main}>
            <h1 className={css.label}>React Redux Counter Example + Async</h1>
      </div>
    )
  }
}
//

/*function mapStateToProps(state) {
  const { counter , dataCruncher } = state

  return {
    counter,
	dataCruncher
  }
}*/

export default App
//export default connect(mapStateToProps)(App)
