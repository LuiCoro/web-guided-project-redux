import {ADD_MEMBER} from "../actions/dragonActions";


// This was basically our state from the class component just created over here now
export const initialState = {
  // this is also from the DragonList.js state
  members: [
    { name: 'Jojo Zhang', dragonStatus: true },
    { name: 'Brandon Harris', dragonStatus: false }
  ]
}

 export const dragonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEMBER:
      return {
        ...state,
        // name is from state and so is dragonStatus
        members: [...state.members, {name: action.payload, dragonStatus: true}]
      }
    
    default :
      return state
  }
}
