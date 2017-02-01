import { combineReducers } from 'redux';
import length from './length';
import mass from './mass';
import pressure from './pressure';
import time from './time';

const index = combineReducers({
  length,
  mass,
  pressure,
  time
});

export default index;
