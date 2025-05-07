import React from 'react';
import heroTextStyles from './heroTextStyle.module.css';

interface HeroTextProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const HeroText = ({ children, onClick }: HeroTextProps) => {
  return (
    <p className={heroTextStyles.text} onClick={onClick}>
      {children}
    </p>
  );
};

export default HeroText;
