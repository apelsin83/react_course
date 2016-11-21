import { combineReducers } from 'redux'
import counter from '../components/Counter/Counter.reducer'
//import dataCruncher from '../components/DataCruncher/DataCruncher.reducer'

const rootReducer = combineReducers({
  counter,
  //dataCruncher
  //place other reducers here...

})

export default rootReducer


//
//