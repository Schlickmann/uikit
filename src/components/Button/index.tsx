import React from 'react';

import { Container } from './styles';

export interface Props {
  backgroundColor?: string;
  color?: string;
  outlined?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonWrapper: React.FC<Props> = ({
  children,
  backgroundColor = '#7159c1',
  color = '#fff',
  outlined = false,
  ...props
}) => {
  return (
    <button
      // backgroundColor={backgroundColor}
      // color={color}
      style={{ backgroundColor, color }}
      // outlined={outlined}
      {...props}
    >
      {children}
    </button>
  );
};

export { ButtonWrapper as Button };
