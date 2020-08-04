import React, { FC } from 'react';
import { InnerLoaderDiv, Loader as LoaderWrapper, LoaderContainer as Container } from './styled';

const Loader: FC = () =>
  <Container>
    <LoaderWrapper>
      <InnerLoaderDiv/><InnerLoaderDiv/><InnerLoaderDiv/>
    </LoaderWrapper>
  </Container>;

export default Loader;
