import { createSelector } from 'reselect';

const getState = (state: any) => state;

export const getSteps = createSelector(getState, state => state?.steps?.data?.steps);
