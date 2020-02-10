import {
  GALLERY_LOADING,
  GET_PHOTOS,
  ADD_PICTURE,
  DELETE_PICTURE
} from '../const/actionTypes';

const initialState = {
  photos: [],
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GALLERY_LOADING:
      return { ...state, isLoading: true };
    case GET_PHOTOS:
      return { ...state, 
        photos: action.payload, 
        isLoading: false };
    default:
      return state;
  }
};
