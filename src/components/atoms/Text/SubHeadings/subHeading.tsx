import React from 'react';
import subHeadingStyle from './subHeadingStyle.module.css';

interface subHeadingsProps {
  children: React.ReactNode;
}

const subHeading = ({ children }: subHeadingsProps) => {
  return <p className={subHeadingStyle.text}>{children}</p>;
};

export default subHeading;
