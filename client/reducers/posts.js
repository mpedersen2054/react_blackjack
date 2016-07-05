
// a reducer takes in 2 things:
// 1) the action ( information about what happened )
// 2) copy of current state

export default function posts(state = [], action) {
  console.log(state, action)
  return state;
}