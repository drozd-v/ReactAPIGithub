import {createStore, combineReducers, applyMiddleware} from 'redux';
import allRepositoryReducer from './reducers/allRepositoryReducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    listRepository: allRepositoryReducer
})

export type AppStateType = ReturnType<typeof reducers>

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store