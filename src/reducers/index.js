import { combineReducers } from 'redux';
import AuthReducer from './auth-reducer';
import PostsReducer from './post-reducer';
import ErrorReducer from './error-reducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  auth: AuthReducer,
  error: ErrorReducer,
});

export default rootReducer;
