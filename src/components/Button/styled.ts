import styled from 'styled-components';

import { Size } from '@/types';

export const Button = styled.button<{
  size?: Size,
  variant?: 'normal' | 'action' | 'float' | 'outline' | 'pseudo',
  shape?: 'rectangle' | 'rounded',
  state?: 'normal' | 'pending' | 'error',
  width?: 'auto' | 'full' | number,
  disable?: boolean,
}>`
  background: transparent;
  border-radius: 50px;
  border: 2px solid var(--orange);
  color: var(--orange);
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  outline: none;
  
  &:hover {
    background-color: var(--white);
  }
`;
