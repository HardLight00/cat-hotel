import React, { FC } from 'react';

import BrandName from '@/components/BrandName';
import Link from '@/components/Link';
import { FirstRow, Footer as Wrapper, FooterCallMe, PhoneNumber } from './styled';
import Button from '@/components/Button';

const Footer: FC = () =>
  <Wrapper data-cy="footer">
    <FirstRow>
      <BrandName/>
      <Link>Политика конфиденциальности</Link>
      <Link>Соглашение на обработку персональных данных</Link>
    </FirstRow>
    <FooterCallMe>
      <PhoneNumber>+7(964)-248-66-60</PhoneNumber>
      <Button>Позвонить</Button>
    </FooterCallMe>
  </Wrapper>

export default Footer;
