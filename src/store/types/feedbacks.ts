import { Status } from '@/types';

import { FeedbacksActionType } from '../actions';

export type FeedbackState = {
  loading: boolean,
  data: object | null,
  error: object | null;
}

export type FeedbackAction = {
  type: FeedbacksActionType,
  data?: object,
  error?: object,
};

export type Feedback = {
  userId: number,
  catName: string,
  userName: string,
  dateFrom: string,
  dateTo: string,
  comment: string,
  stars: number,
}

export type FeedbacksDataResponse = {
  status: Status,
  steps: Feedback[],
}
