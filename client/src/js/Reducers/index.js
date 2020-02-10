import { combineReducers } from 'redux';
import userReducer from './userReducer';
import galleryReducer from './galleryReducer';

export default combineReducers({
  users: userReducer,
  photos: galleryReducer
});
