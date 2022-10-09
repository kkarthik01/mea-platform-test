const { createLogger } = require ('redux-logger')

const { createStore, applyMiddleware, combineReducers } = require('redux') 

/*

ACTIONS

{
    type: 'INCREMENT_COUNTER'
}
*/

//Action type constants
const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
const DISPLAY = 'DISPLAY'
const HIDE = 'HIDE'
//Action creators - Functions which return action object
const incrementCounter = (count=1) => ({
    type: INCREMENT_COUNTER,
    payload: count
})


const decrementCounter = (count=1) => ({
    type: DECREMENT_COUNTER,
    payload: count
})

const display = () => ({
    type: DISPLAY
})

const hide = () => ({
    type: HIDE
})
/*

REDUCER FUNCTION
1 Define the initial state
2 Functions with 2 parameters --> PrevState, action
3 Contains logic to return the updated state on the basis of action type
*/

let countInitialState = {
    count: 0
}
const countReducer = (state = countInitialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                count : state.count + action.payload
            }
        case DECREMENT_COUNTER:
            return {
                ...state,
                count: state.count - action.payload
            }
        default:
            return state
    }
}


let showInitialState = {
    show: false
}

const showReducer = (state = showInitialState, action) => {
    switch (action.type) {
        
        case DISPLAY:
            return {
                ...state,
                show: true
            }
        case HIDE:
            return {
                ...state,
                show: false
            }
        default:
            return state
    }
}


let rootReducer = combineReducers({
    show: showReducer,
    count: countReducer
})

let store = createStore(rootReducer, applyMiddleware(createLogger()))

let unsubscribe = store.subscribe(() => { })

// console.log(store.getState())

store.dispatch(incrementCounter(3))
store.dispatch(incrementCounter(5))
store.dispatch(incrementCounter(4))
store.dispatch(display())
store.dispatch(incrementCounter(1))

// console.log(store.getState())

store.dispatch(decrementCounter(2))
// console.log(store.getState())

store.dispatch(decrementCounter(5))
// console.log(store.getState())


store.dispatch(decrementCounter(7))
// console.log(store.getState())
store.dispatch(hide())
unsubscribe()