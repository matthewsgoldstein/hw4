import { ActionTypes } from '../actions';

const ErrorReducer = (state = { errorKind: '' }, action) => {
  switch (action.type) {
    case ActionTypes.BAD_CREDS:
      return Object.assign({}, state, { errorKind: 'Bad credentials!' });
    case ActionTypes.PASS_MISMATCH:
      return Object.assign({}, state, { errorKind: 'Passwords must match!' });
    case ActionTypes.INCOMPLETE:
      return Object.assign({}, state, { errorKind: 'Please fill out all fields!' });
    case ActionTypes.EXISTED:
      return Object.assign({}, state, { errorKind: 'User already exists!' });
    case ActionTypes.TITLE_CONTENT:
      return Object.assign({}, state, { errorKind: 'Add both a title and content!' });
    case ActionTypes.MUTE_ERROR:
      return Object.assign({}, state, { errorKind: '' });
    default:
      return state;
  }
};

export default ErrorReducer;
