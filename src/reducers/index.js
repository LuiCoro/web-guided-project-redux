import {combineReducers} from 'redux'

// we import these here to make our reducers alot more easier to use
import {dragonReducer} from "./dragonReducer";
import {titleReducer} from "./titleReducer";

export default combineReducers({
  //Theses are from our state
  dragon: dragonReducer ,
  title: titleReducer
})