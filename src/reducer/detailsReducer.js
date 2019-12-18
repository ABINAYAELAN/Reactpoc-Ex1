import * as actionTypes from '../action/actionTypes';

export default (state = [], action) => {
    switch (action.type){
      
      case actionTypes.CREATE_NEW_DETAILS:
      return [
        ...state, Object.assign({}, action.detail)
      ];
  
      case actionTypes.DELETE_DETAILS:
          return state.filter((data, i) => i !== action.id);
          default:
                return state;
        }
      };