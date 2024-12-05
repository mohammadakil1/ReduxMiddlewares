// rootReducer
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import dataReducer from './ThunkReducer';
import sagaReducer from './SagaReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  data: dataReducer,
  sagadata: sagaReducer,
});

export default rootReducer;
