import { combineReducers } from 'redux';
import library from './libraryReducer';
import ui from './uiReducer';

export default combineReducers({
  library,
  ui,
});
