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
  backgroundColor = '#fe346e',
  color = '#fff',
  outlined = false,
  ...props
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      color={color}
      style={{ backgroundColor, color }}
      outlined={outlined}
      {...props}
    >
      {children}
    </Container>
  );
};

export { ButtonWrapper as Button };
