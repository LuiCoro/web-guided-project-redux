// We created this because if you look at the code you see we are tying to add members
// pretty much self-explanatory
export const ADD_MEMBER = 'ADD_MEMBER'

// lower case verison of the action
// the props being passed into are from state
export const addMember = (name) => {
  return {
    //Type should always match the case!
    type: ADD_MEMBER,
    // payloads should match up to what we are passing as a prop
    payload: name
  }
}