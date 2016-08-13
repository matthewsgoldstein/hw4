import { combineReducers } from 'redux';
import AuthReducer from './auth-reducer';
import PostsReducer from './post-reducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  auth: AuthReducer,
});

export default rootReducer;
