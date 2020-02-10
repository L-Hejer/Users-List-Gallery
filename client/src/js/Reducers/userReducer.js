import {
  USER_LOADING,
  GET_USERS
} from '../const/actionTypes';

const initialState = {
  isLoading: false,
  users: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USERS:
      return {
        ...state,
        isLoading:false,
        users: action.payload
      };
    default:
      return state;
  }
}
