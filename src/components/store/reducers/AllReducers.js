import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

const AllReducers = combineReducers({
  tickets: searchReducer,
});

export default AllReducers;
