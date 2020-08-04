import styled from 'styled-components';

import { Color, Size } from '@/types';

import { mapIconSize } from './utils';

export const Icon = styled.span<{ size?: Size, color?: Color }>`
  display: block;
  width: ${props => mapIconSize(props.size ?? 's')}px;
  height: ${props => mapIconSize(props.size ?? 's')}px;
  color: ${props => props.color ?? 'var(--black)'};
`
