import React, { FC, memo } from 'react';
import IconSVG from '@/components/Icon';
import { IconName, Size } from '@/types';

import { Button as Wrapper } from './styled';

export type ButtonProps = {
  size?: Size,
  icon?: IconName,
  variant?: 'normal' | 'action' | 'float' | 'outline' | 'pseudo',
  iconPosition?: 'left' | 'right',
  shape?: 'rectangle' | 'rounded',
  state?: 'normal' | 'pending' | 'error',
  width?: 'auto' | 'full' | number,
  disable?: boolean,
  onClick?: () => void,
  children: any,
};

const noOp = () => {};

const Button: FC<ButtonProps> = ({
                                   onClick = noOp,
                                   icon,
                                   iconPosition,
                                   size = 's',
                                   variant = 'normal',
                                   shape = 'rounded',
                                   state = 'normal',
                                   width = 'auto',
                                   disable = false,
                                   children,
                                 }) =>
  <Wrapper variant={variant} size={size} shape={shape} state={state} width={width} onClick={onClick} disable={disable}>
    {iconPosition === 'left' && icon && (<IconSVG name={icon}/>)}
    {children}
    {iconPosition === 'right' && icon && (<IconSVG name={icon}/>)}
  </Wrapper>;

export default memo(Button);
