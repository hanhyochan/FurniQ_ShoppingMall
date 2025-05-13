import React from 'react';
import heroTextStyles from './heroTextStyle.module.css';

interface HeroTextProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const HeroText = ({ children, className, onClick }: HeroTextProps) => {
  return (
    <p className={`${heroTextStyles.text} ${className ?? ''}`} onClick={onClick}>
      {children}
    </p>
  );
};

export default HeroText;
