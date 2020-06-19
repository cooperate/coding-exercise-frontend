import { combineReducers } from 'redux'
import items from './items'
import itemProperties from './item-properties';

export default combineReducers({
  items,
  itemProperties
})