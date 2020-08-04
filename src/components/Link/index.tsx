import React, { FC } from 'react';
import { Link as Wrapper } from './styled';

const Link: FC = ({ children }) =>
  <Wrapper>
    {children}
  </Wrapper>;

export default Link;
