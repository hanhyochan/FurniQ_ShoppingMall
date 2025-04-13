import React from 'react';
import { HeadingsStyleMap } from './HeadingsStyleMap.style';

interface HeadingsProps {
    tag: 'heading1' | 'heading2_sb' | 'heading2_m';
    children: React.ReactNode;
    className?: string;
    }

const Heading = ({ tag = 'heading1', children, className }: HeadingsProps) => {
    const Component = HeadingsStyleMap[tag] || HeadingsStyleMap.heading1;

    return <Component className={className}>{children}</Component>;
  };
  
  export default Heading;

