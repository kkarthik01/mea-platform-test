const {createStore}  = require('redux') 

/*

ACTIONS

{
    type: 'INCREMENT_COUNTER'
}
*/

//Action type constants
const INCREMENT_COUNTER = 'INCREMENT_COUNTER'

//Action creators - Functions which return action object
const incrementCounter = () => ({
    type: INCREMENT_COUNTER
})

/*

REDUCER FUNCTION
1 Define the initial state
2 Functions with 2 parameters --> PrevState, action
3 Contains logic to return the updated state on the basis of action type
*/

let initialState = {
    count: 0
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                count : state.count + 1
            }
        default:
            return state
    }
}

let store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))