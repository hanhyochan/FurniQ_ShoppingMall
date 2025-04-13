import React from 'react';
import { Hero } from './HeroStyle.style';

interface HeroTextProps {
    children: React.ReactNode;
    className?: string;
    }

const HeroText = ({ children, className }: HeroTextProps) => {
    return <Hero className={className}>{children}</Hero>;
  };
  
  export default HeroText;