import * as types from '../actions/action-types';
import initialState from './initial-state';

const loggerReducer = (state = initialState.logger, action: any) => {
  console.log('item properties reducer', state);
  switch(action.type) {
    case types.LOAD_ITEMS_SUCCESS: 
        return [...state, {requestType: action.requestType, reducerAction: action.type}];
    case types.CREATE_ITEM_SUCCESS:
        return [...state, {requestType: action.requestType, reducerAction: action.type}];
    case types.DELETE_ITEM_SUCCESS:
        return [...state, {requestType: action.requestType, reducerAction: action.type}];   
    default: 
      return state;
  }
}

export default loggerReducer;
