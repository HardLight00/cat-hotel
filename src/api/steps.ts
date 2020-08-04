import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// @ts-ignore
import { getConfig } from '@ijl/cli';

import { StepsActionType } from '@/store/actions';
import { StepsDataResponse } from '@/store/types';

const api = getConfig()['steps.api.base.url'];

const getFetchAction = () => ({
  type: StepsActionType.STEPS,
})

const getSuccessAction = (data: StepsDataResponse) => ({
  type: StepsActionType.STEPS_SUCCESS,
  data
})

const getErrorAction = () => ({
  type: StepsActionType.STEPS_FAIL,
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
    const response: AxiosResponse<StepsDataResponse> = await axios(`${api}/get-steps`, requestProps);

    if (response.data?.status?.code === 0) {
      dispatch(getSuccessAction(response.data));
    } else {
      dispatch(getErrorAction());
    }

  } catch (error) {
    dispatch(getErrorAction());
  }
}

