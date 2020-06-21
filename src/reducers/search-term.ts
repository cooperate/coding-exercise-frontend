import * as types from '../actions/action-types';
import initialState from './initial-state';

const searchReducer = (state = initialState.searchTerm, action: any) => {
  switch(action.type) {
    case types.UPDATE_SEARCH_TERM:
        return action.searchTerm;    
    default: 
      return state;
  }
}

export default searchReducer;
