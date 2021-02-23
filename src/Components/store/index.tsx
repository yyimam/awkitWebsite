import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
// import allReducer from "./reducer/reducerHome";
import { persistCombineReducers, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducer';

const persistConfig = {
    key: 'root',
    storage,
  }
  
const persistedReducer = persistReducer(persistConfig, rootReducer) //persistConfig

const store = createStore(
 persistedReducer,applyMiddleware(thunk))

let persistor = persistStore(store)

export {store, persistor};