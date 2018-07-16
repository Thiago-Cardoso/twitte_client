import { combineReducers } from 'redux';
import TrendingTopicsReducer from './containers/TrendingTopicsContainer/reducer.js';
import CurrentUserReducer from './containers/Auth/reducer.js';
import ImagePreviewReducer from './containers/ProfileEditContainer/reducer.js';
 
const rootReducer = combineReducers({
  trendings: TrendingTopicsReducer,
  current_user: CurrentUserReducer,
  image_preview: ImagePreviewReducer,
});
 
export default rootReducer;