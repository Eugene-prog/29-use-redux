import { createStore, combineReducers } from 'redux';
import {cashReducer} from './cashReducer';
import { costumerReducer } from './customerReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers(
  {
    cash: cashReducer, 
    costumer: costumerReducer
  }
);

export const store = createStore(rootReducer, composeWithDevTools());