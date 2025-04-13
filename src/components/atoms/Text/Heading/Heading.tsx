import React from 'react';
import { HeadingStyleMap } from './HeadingStyleMap.style';

interface HeadingProps {
    tag: 'heading1' | 'heading2_sb' | 'heading2_m';
    children: React.ReactNode;
    className?: string;
    }

const Heading = ({ tag = 'heading1', children, className }: HeadingProps) => {
    const Component = HeadingStyleMap[tag] || HeadingStyleMap.h1;

    return <Component className={className}>{children}</Component>;
  };
  
  export default Heading;

