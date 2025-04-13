import React from 'react';
import { SubHeadingText } from './subHeadingStyle';

interface subHeadingsProps {
    children: React.ReactNode;
    className?: string;
    }

const subHeading = ({ children, className }: subHeadingsProps) => {
    return <SubHeadingText className={className}>{children}</SubHeadingText>;
  };
  
  export default subHeading;