import { LoadingActionType } from '../actions';
import { LoadingAction, LoadingState } from '../types';

const initState: LoadingState = {
  loading: false,
  data: null,
  error: null,
}

const fetchHandler = (state: LoadingState) => ({
  ...state,
  loading: true,
})

const fetchSuccessHandler = (state: LoadingState, action: LoadingAction) => ({
  ...state,
  loading: false,
  data: action.data ?? null,
})

const fetchFailHandler = (state: LoadingState, action: LoadingAction) => ({
  ...state,
  loading: false,
  error: action.error ?? null,
})

const handlers: Record<LoadingActionType, (state: LoadingState, action: LoadingAction) => LoadingState> = {
  [LoadingActionType.LOADING]: fetchHandler,
  [LoadingActionType.LOADING_SUCCESS]: fetchSuccessHandler,
  [LoadingActionType.LOADING_FAIL]: fetchFailHandler,
}

export const loadingReducer = (state = initState, action: LoadingAction) =>
  handlers[action.type] ? handlers[action.type](state, action) : state
