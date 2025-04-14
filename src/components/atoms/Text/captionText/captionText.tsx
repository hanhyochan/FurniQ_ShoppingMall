import React from 'react';
import { captionTextStyleMap } from './captionTextStyleMap.style';

interface captionTextProps {
    tag: 'caption' | 'cation_gray';
    children: React.ReactNode;
    className?: string;
    }

const caption = ({ tag = 'caption', children, className }: captionTextProps) => {
    const Component = captionTextStyleMap[tag] || captionTextStyleMap.caption;

    return <Component className={className}>{children}</Component>;
  };
  
  export default caption;

