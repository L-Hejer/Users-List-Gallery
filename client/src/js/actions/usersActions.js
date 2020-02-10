import axios from 'axios';
import {
  USER_LOADING,
  GET_USERS,
  ADD_USER,
  EDIT_USER,
  DELETE_USER
} from '../const/actionTypes';

// Users Loading
export const setUsersLoading = () => {
  return { type: USER_LOADING };
};

//Get Users
export const loadUser = () =>  dispatch => {
  dispatch(setUsersLoading());
  axios
 .get('/api/user')
    .then(res => {
      dispatch({
        type: GET_USERS,
        payload: res.data
      });
    })
    .catch(err => {
      console.error(err);
    });
};

//Add User
export const addUser = ({
  name,
  surName,
  birthYear,
  birthPlace
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({
    name,
    surName,
    birthYear,
    birthPlace
  });
  try {
    const res = await axios.post('/api/user/adduser', body, config);
    dispatch(loadUser());
  } catch (error) {
    console.error(error);
  }
};

//Edit User
export const editUser = (id, editedUser) => dispatch => {
  axios.put(`/api/user/${id}`, editedUser)
  .then(res => dispatch(loadUser()));
};

//Delete User
export const deleteUser = id => async dispatch => {
  try {
    await axios.delete(`/api/user/${id}`);
    dispatch(loadUser());
  } catch (error) {
    console.error(error);
  }
};
