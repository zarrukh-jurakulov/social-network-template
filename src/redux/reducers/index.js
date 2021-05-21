import {combineReducers} from 'redux'
import {userReducer} from './userReducer'
 
const reducers = combineReducers({
    allUsers: userReducer
})

export default reducers