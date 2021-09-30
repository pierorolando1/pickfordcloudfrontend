import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { lenguageReducer } from './lenguages/reducer';

const reducers = combineReducers({
    lenguages: lenguageReducer
})

//@ts-ignore
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;



export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);