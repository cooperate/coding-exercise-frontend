import * as types from '../actions/action-types';
import initialState from './initial-state';

const itemPropertiesReducer = (state = initialState.itemProperties, action: any) => {
  console.log('item properties reducer', state);
  switch(action.type) {
    case types.UPDATE_ITEM_PROPERTIES:
        console.log('action', action);
        if(action.itemProperties) {
          return {...action.itemProperties};    
        } else {
          return {...state, ...action.itemProperties};
        }
    default: 
      return state;
  }
}

export default itemPropertiesReducer;
