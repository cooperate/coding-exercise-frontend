import * as types from '../actions/action-types';
import initialState from './initial-state';

const searchReducer = (state = initialState.searchTerm, action: any) => {
  console.log('item properties reducer', state);
  switch(action.type) {
    case types.UPDATE_SEARCH_TERM:
        console.log('action', action);
        return action.searchTerm;    
    default: 
      return state;
  }
}

export default searchReducer;
