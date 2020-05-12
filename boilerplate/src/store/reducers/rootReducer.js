import { combineReducers } from 'redux'

const initialState = {
  state: {}
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'someType':
      //do someting
      return state;

    default:
      return state;
  }
}

export default combineReducers({ rootReducer });