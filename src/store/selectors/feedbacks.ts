import { createSelector } from 'reselect';

const getState = (state: any) => state;

export const getFeedbacks = createSelector(getState, state => state?.feedbacks?.data?.feedbacks);
