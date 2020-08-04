import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// @ts-ignore
import { getConfig } from '@ijl/cli';

import { FeedbacksActionType } from '@/store/actions';
import { FeedbacksDataResponse } from '@/store/types';

const api = getConfig()['feedbacks.api.base.url'];

const getFetchAction = () => ({
  type: FeedbacksActionType.FEEDBACKS,
})

const getSuccessAction = (data: FeedbacksDataResponse) => ({
  type: FeedbacksActionType.FEEDBACKS_SUCCESS,
  data
})

const getErrorAction = () => ({
  type: FeedbacksActionType.FEEDBACKS_FAIL,
})


export default () => async (dispatch: any) => {
  dispatch(getFetchAction());

  const requestProps: AxiosRequestConfig = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    }
  };

  try {
    const response: AxiosResponse<FeedbacksDataResponse> = await axios(`${api}/get-feedbacks`, requestProps);

    if (response.data?.status?.code === 0) {
      dispatch(getSuccessAction(response.data));
    } else {
      dispatch(getErrorAction());
    }

  } catch (error) {
    dispatch(getErrorAction());
  }
}

