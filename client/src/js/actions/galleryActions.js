import axios from 'axios';

import {
    GALLERY_LOADING,
    GET_PHOTOS,
  } from '../const/actionTypes';

// LOADING GALLERY
export const setPhotosLoading = () => {
    return { type: GALLERY_LOADING};
  };

  //GET ALL PHOTOS
  export const getPhotos = () => dispatch => {
dispatch(setPhotosLoading());
axios
.get('/api/picture')
.then(res => dispatch({
    type: GET_PHOTOS,
    payload: res.data
}))
.catch(err => console.log(('error get photos')))
  };

  //ADD PHOTO
  export const addPhoto = (id, newPhoto) => dispatch => {
    axios
      .post(`/api/picture/${id}`, newPhoto)
      .then(res => dispatch(getPhotos()))
      .catch(err => console.error(err));
  };

  //DELETE PHOTO
  export const deletePhoto = id => dispatch => {
    axios
      .delete(`/api/picture/${id}`)
      .then(res => dispatch(getPhotos()))
      .catch(err => console.error(err));
  };

  