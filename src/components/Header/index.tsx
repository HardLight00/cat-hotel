import React, { FC, memo } from 'react';

import BrandName from '@/components/BrandName';
import Button from '@/components/Button';

import { Header as Wrapper } from './styled';
import NavItems from './NavItems';

const Header: FC = () =>
  <Wrapper data-cy="header">
    <BrandName/>
    <NavItems/>
    <Button>Позвонить</Button>
  </Wrapper>;

export default memo(Header);
