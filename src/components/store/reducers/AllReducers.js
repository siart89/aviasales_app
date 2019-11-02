import { combineReducers } from 'redux';
import filterReducer from './filterReducer';

const AllReducers = combineReducers({
  change: filterReducer,
});

export default AllReducers;
