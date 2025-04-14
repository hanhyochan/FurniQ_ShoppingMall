import React from 'react';
import { bodyTextStyleMap } from './bodyTextStyleMap.style';

interface bodyTextProps {
    tag: 'body1' | 'body1_gray' | 'body2' | 'body2_gray' | 'body2_r';
    children: React.ReactNode;
    className?: string;
    }

const bodyText = ({ tag = 'body1', children, className }: bodyTextProps) => {
    const Component = bodyTextStyleMap[tag] || bodyTextStyleMap.body1;

    return <Component className={className}>{children}</Component>;
  };
  
  export default bodyText;

