import React, { FC } from 'react';

import { Step } from '@/store/types';
import Icon from '@/components/Icon';

import { Description, Header, Step as Wrapper, StepNum, Title } from './styled';

export type StepViewProps = Step;

const StepView: FC<StepViewProps> = ({ id, title, description, icon }) => {
  return (
    <Wrapper>
      <Icon name={icon}/>
      <Header>
        <StepNum>Шаг {id}:</StepNum>
        <Title>{title}</Title>
      </Header>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default StepView;
