import { LoadingActionType } from '../actions';

export type LoadingState = {
  loading: boolean,
  data: object | null,
  error: object | null;
}

export type LoadingAction = {
  type: LoadingActionType,
  data?: object,
  error?: object,
}
