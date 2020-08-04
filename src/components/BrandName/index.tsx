import React, { FC } from 'react';
import { BrandName as Wrapper, BrandNamePartDescription, BrandNamePartOne, BrandNamePartTwo } from './styled';

const BrandName: FC = () =>
  <Wrapper>
    <BrandNamePartOne>Cat</BrandNamePartOne>
    <BrandNamePartTwo>Seasons</BrandNamePartTwo>
    <BrandNamePartDescription>Отель для кошек</BrandNamePartDescription>
  </Wrapper>;

export default BrandName;
