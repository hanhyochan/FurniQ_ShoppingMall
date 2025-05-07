import React from 'react';
import { captionTextStyleMap } from './captionTextStyleMap.style';

interface captionTextProps {
  tag: 'caption' | 'cation_gray';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const caption = ({ tag = 'caption', children, className, onClick }: captionTextProps) => {
  const Component = captionTextStyleMap[tag] || captionTextStyleMap.caption;

  return (
    <Component className={className} onClick={onClick}>
      {children}
    </Component>
  );
};

export default caption;
