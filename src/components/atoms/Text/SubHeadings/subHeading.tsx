import React from 'react';
import subHeadingStyle from './subHeadingStyle.module.css';

interface subHeadingsProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const subHeading = ({ children, onClick }: subHeadingsProps) => {
  return (
    <p className={subHeadingStyle.text} onClick={onClick}>
      {children}
    </p>
  );
};

export default subHeading;
