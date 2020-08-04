import React, { FC } from 'react';
import { Link } from 'react-router-dom'

import { CatMainInfo } from '@/assests/images';
import Button from '@/components/Button';
import { COLORS } from '@/types';

import { Description, Header, InfoBlock, MainInfo as Wrapper } from './styled';

const MainInfo: FC = () => (
  <Wrapper>
    <InfoBlock>
      <Header>Отель для кошек в Иннополисе</Header>
      <Description>Мы возьмем вашего котика в гости от 1 дня до 2 месяцев</Description>
      <Button><Link to="/cat-seasons/order" data-cy="order-button" style={{
        textDecoration: 'none',
        color: COLORS.ORANGE,
      }}>Заказать номер</Link></Button>
    </InfoBlock>
    <img src={CatMainInfo} alt="main-cat-info" height="460px"
         style={{ position: 'relative', right: '-10%', top: '54px' }}/>
  </Wrapper>
);

export default MainInfo;
