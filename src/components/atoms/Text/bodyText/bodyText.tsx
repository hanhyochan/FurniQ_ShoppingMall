import React from 'react';
import { bodyTextStyleMap } from './bodyTextStyleMap.style';

interface bodyTextProps {
  tag: 'body1' | 'body1_gray' | 'body2' | 'body2_gray' | 'body2_r';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const bodyText = ({ tag = 'body1', children, className, onClick }: bodyTextProps) => {
  const Component = bodyTextStyleMap[tag] || bodyTextStyleMap.body1;

  return (
    <Component className={className} onClick={onClick}>
      {children}
    </Component>
  );
};

export default bodyText;
