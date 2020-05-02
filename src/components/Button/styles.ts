import styled from 'styled-components';
import { lighten, darken, readableColor } from 'polished';

import { Props } from './index';

export const Container = styled.button<Props>`
  background-color: ${({ backgroundColor, outlined }: Props) => outlined ? 'transparent' : backgroundColor} !important;
  color: ${({ color }: Props) => readableColor(color as string, '#fff', '#011030')};

  padding: 18px 45px;
  text-transform: uppercase;
  font-weight: bold;

  border-radius: 4px;
  border: ${({ backgroundColor, outlined }: Props) => outlined ? `2px solid ${backgroundColor}` : 'none'};
`;
