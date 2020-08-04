import { StepsActionType } from '../actions';
import { StepsAction, StepsState } from '../types';

const initState: StepsState = {
  loading: false,
  data: null,
  error: null,
}

const fetchHandler = (state: StepsState) => ({
  ...state,
  loading: true,
})

const fetchSuccessHandler = (state: StepsState, action: StepsAction) => ({
  ...state,
  loading: false,
  data: action.data ?? null,
})

const fetchFailHandler = (state: StepsState, action: StepsAction) => ({
  ...state,
  loading: false,
  error: action.error ?? null,
})

const handlers: Record<StepsActionType, (state: StepsState, action: StepsAction) => StepsState> = {
  [StepsActionType.STEPS]: fetchHandler,
  [StepsActionType.STEPS_SUCCESS]: fetchSuccessHandler,
  [StepsActionType.STEPS_FAIL]: fetchFailHandler,
}

export const stepsReducer = (state = initState, action: StepsAction) =>
  handlers[action.type] ? handlers[action.type](state, action) : state
