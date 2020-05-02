import React from 'react';

interface Props {
  backgroundColor?: string;
  color?: string;
}

const style: React.CSSProperties = {
  backgroundColor: '#7159c1',
  color: '#fff'
}

export const Button: React.FC<Props> = ({ children, backgroundColor = "#7159c1", color = "#fff" }) => {
  return <button style={{ backgroundColor, color }}>{children}</button>
}