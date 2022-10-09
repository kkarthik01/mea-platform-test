const {createStore}  = require('redux') 

/*

ACTIONS

{
    type: 'INCREMENT_COUNTER'
}
*/

//Action type constants
const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
//Action creators - Functions which return action object
const incrementCounter = () => ({
    type: INCREMENT_COUNTER,
    payload: count
})


const decrementCounter = () => ({
    type: DECREMENT_COUNTER
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
        case DECREMENT_COUNTER:
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}

let store = createStore(reducer)

let unsubscribe = store.subscribe(() => { })

console.log(store.getState())

store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())

console.log(store.getState())

store.dispatch(decrementCounter())
console.log(store.getState())

store.dispatch(decrementCounter())
console.log(store.getState())


store.dispatch(decrementCounter())
console.log(store.getState())

unsubscribe()