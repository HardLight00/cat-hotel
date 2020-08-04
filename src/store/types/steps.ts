import { IconName, Status } from '@/types';

import { StepsActionType } from '../actions';

export type StepsState = {
  loading: boolean,
  data: object | null,
  error: object | null;
}

export type StepsAction = {
  type: StepsActionType,
  data?: object,
  error?: object,
};

export type Step = {
  id: string,
  title: string,
  description: string,
  icon: IconName,
}

export type StepsDataResponse = {
  status: Status,
  steps: Step[],
}
