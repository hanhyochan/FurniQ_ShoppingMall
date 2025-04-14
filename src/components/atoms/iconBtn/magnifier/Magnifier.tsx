import Image from 'next/image';
import { css } from '@emotion/react';

const magnifier = () => {
  return (
    <button
      css={css`
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
      `}
    >
      <Image src="/icons/magnifier.svg" alt="magnifier" width={27.2} height={27.2} />
    </button>
  );
};

export default magnifier;
