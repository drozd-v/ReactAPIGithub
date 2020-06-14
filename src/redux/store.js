import {createStore, combineReducers, applyMiddleware} from 'redux';
import allRepositoryReducer from './reducers/allRepositoryReducer'
import thunkMiddleware from 'redux-thunk'


let reducers = combineReducers({
    listRepository: allRepositoryReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store