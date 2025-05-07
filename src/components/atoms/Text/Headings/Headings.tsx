import React from 'react';
import { HeadingsStyleMap } from './HeadingsStyleMap.style';

interface HeadingsProps {
  tag: 'heading1' | 'heading2_sb' | 'heading2_m';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Heading = ({ tag = 'heading1', children, className, onClick }: HeadingsProps) => {
  const Component = HeadingsStyleMap[tag] || HeadingsStyleMap.heading1;

  return (
    <Component className={className} onClick={onClick}>
      {children}
    </Component>
  );
};

export default Heading;
