import * as types from '../actions/action-types';
import initialState from './initial-state';

const itemReducer = (state = initialState.items, action: any) => {
  switch(action.type) {
    case types.LOAD_ITEMS_SUCCESS:
      return [...action.items];
    case types.DELETE_ITEM_SUCCESS: {
        const newState = Object.assign([], state);
        const indexOfItemToDelete = state.findIndex((item: any) => {
          return item._id == action.item._id
        })
        newState.splice(indexOfItemToDelete, 1);
        return [...newState];
      }
    case types.CREATE_ITEM_SUCCESS: {
      return [...state, action.item];
    }
    default: 
      return [...state];
  }
}

export default itemReducer;