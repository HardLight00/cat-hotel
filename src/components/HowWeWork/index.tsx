import React, { FC, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchSteps } from '@/api';
import { getSteps } from '@/store/selectors';
import { Step } from '@/store/types';
import Loader from '@/components/Loader';

import StepView from './StepView';
import { HowWeWork as Wrapper } from './styled';

export type HowWeWorkProps = {
  steps: Step[],
  fetchSteps: () => void,
}

const HowWeWork: FC<HowWeWorkProps> = ({ steps, fetchSteps }) => {
  useEffect(() => {
    fetchSteps();
  }, []);

  if (!steps) {
    return (
      <Wrapper data-cy="how-we-work">
        <Loader/>
      </Wrapper>);
  }

  return (
    <Wrapper data-cy="how-we-work">
      {steps.map(step => <StepView key={step.id} {...step} />)}
    </Wrapper>
  );
};

export const mapStateToProps = (state: any) => ({
  steps: getSteps(state),
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  fetchSteps,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HowWeWork);
