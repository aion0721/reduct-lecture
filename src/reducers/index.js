import { combineReducers } from 'redux'
import reducerMeat from './reducerMeat'
import reducerVegitable from './reducerVegitable'

const rootReducer = combineReducers({
    reducerMeat,
    reducerVegitable
})

export default rootReducer