import * as actionTypes from './actionTypes';

export const createDetail = (detail) => {
    return {
      type: actionTypes.CREATE_NEW_DETAILS,
      detail: detail
    }
  };

  export const deleteDetail = (id) => {
      return {
          type: actionTypes.DELETE_DETAILS,
          id:id
      }
  }