import { combineReducers, createStore } from 'redux';
import GameOanTuTiReducer from './GameOanTuTiReducer.js'

const rootReducer = combineReducers({

     GameOanTuTiReducer

});

export const store = createStore(rootReducer)