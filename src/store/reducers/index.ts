import { combineReducers } from 'redux'
import { loadingReducer } from './loading';
import { stepsReducer } from './steps';
import { feedbacksReducer} from './feedbacks';

export default combineReducers({
  loading: loadingReducer,
  steps: stepsReducer,
  feedbacks: feedbacksReducer,
})
