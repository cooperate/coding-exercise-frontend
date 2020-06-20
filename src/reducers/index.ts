import { combineReducers } from 'redux'
import items from './items'
import itemProperties from './item-properties';
import searchTerm from './search-term';
import logger from './logger';

export default combineReducers({
  items,
  itemProperties,
  searchTerm,
  logger
})