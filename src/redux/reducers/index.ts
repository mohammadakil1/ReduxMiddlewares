// rootReducer
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import dataReducer from './ThunkReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  data: dataReducer,
});

export default rootReducer;
