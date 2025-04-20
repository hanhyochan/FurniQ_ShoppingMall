import React from 'react';
import heroTextStyles from './heroTextStyle.module.css';

interface HeroTextProps {
  children: React.ReactNode;
}

const HeroText = ({ children }: HeroTextProps) => {
  return <p className={heroTextStyles.text}>{children}</p>;
};

export default HeroText;
