import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URL = 'https://cs52hw5.herokuapp.com';
const API_KEY = '?key=matthew_goldstein';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  UPDATE_POST: 'UPDATE_POST',
};

export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then(response => {
      // do something with response.data  (some json)
      dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
      console.log('successfully got posts');
    }).catch(error => {
      // hit an error do something else!
      console.log('Error fetching posts!');
    });
  };
}

export function updatePost(post) {
  return (dispatch) => {
    const fields = { title: post.title, content: post.content, tags: post.tags };
    axios.put(`${ROOT_URL}/posts/${post.id}${API_KEY}`, fields).then(response => {
      dispatch({ type: ActionTypes.UPDATE_POST, payload: response.data });
      location.reload();
    });
  };
}

export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then(response => {
      // do something with response.data  (some json)
      dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
      console.log('fetched post successfully!');
      console.log(response.data);
    }).catch(error => {
      // hit an error do something else!
      console.log('Error fetching post!');
    });
  };
 // can now dispatch stuff
}

export function createPost(post) {
  return (dispatch) => {
    const fields = { title: post.title, content: post.content, tags: post.tags };
    axios.post(`${ROOT_URL}/posts/${API_KEY}`, fields).then(response => {
      browserHistory.push('/');
    });
  };
}

export function deletePost(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(response => {
      browserHistory.push('/');
    });
  };
}
