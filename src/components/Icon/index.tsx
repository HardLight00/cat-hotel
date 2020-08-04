import React, { FC } from 'react';
import SVG from 'react-inlinesvg';

import { Color, IconName, Size } from '@/types';

import { mapIconName } from './utils';
import { Icon as Wrapper } from './styled';

export type IconProps = {
  name: IconName,
  size?: Size,
  color?: Color,
}

const Icon: FC<IconProps> = ({ name, size = 's', color }) =>
  <Wrapper size={size}>
    <SVG
      src={mapIconName(name)}
      color={color}
    />
  </Wrapper>

export default Icon;
