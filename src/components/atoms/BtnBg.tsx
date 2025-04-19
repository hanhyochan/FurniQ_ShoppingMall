import { css } from '@emotion/react';

interface IconBtnBgProps {
  children: React.ReactNode;
}

const IconBtnBg = ({ children }: IconBtnBgProps) => {
  return (
    <button
      css={css`
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
      `}
    >
      {children}
    </button>
  );
};

export default IconBtnBg;
