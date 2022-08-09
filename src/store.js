import{ createStore,combineReducers,applyMiddleware} from 'redux'
import thunk  from 'redux-thunk';

const reducers=combineReducers({

})  // to handle reducers easily inside the store

const middleware=[thunk]

const store=createStore(reducers,applyMiddleware(...middleware)); // to create a store
export default store