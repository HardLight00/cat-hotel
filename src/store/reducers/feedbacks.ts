import { FeedbacksActionType } from '../actions';
import { FeedbackAction, FeedbackState } from '../types';

const initState: FeedbackState = {
  loading: false,
  data: null,
  error: null,
}

const fetchHandler = (state: FeedbackState) => ({
  ...state,
  loading: true,
})

const fetchSuccessHandler = (state: FeedbackState, action: FeedbackAction) => ({
  ...state,
  loading: false,
  data: action.data ?? null,
})

const fetchFailHandler = (state: FeedbackState, action: FeedbackAction) => ({
  ...state,
  loading: false,
  error: action.error ?? null,
})

const handlers: Record<FeedbacksActionType, (state: FeedbackState, action: FeedbackAction) => FeedbackState> = {
  [FeedbacksActionType.FEEDBACKS]: fetchHandler,
  [FeedbacksActionType.FEEDBACKS_SUCCESS]: fetchSuccessHandler,
  [FeedbacksActionType.FEEDBACKS_FAIL]: fetchFailHandler,
}

export const feedbacksReducer = (state = initState, action: FeedbackAction) =>
  handlers[action.type] ? handlers[action.type](state, action) : state
