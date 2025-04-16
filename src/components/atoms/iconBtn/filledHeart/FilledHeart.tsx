import Image from 'next/image';
import { css } from '@emotion/react';

const FilledHeart = () => {
  return (
    <button
      css={css`
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
      `}
    >
      <Image src="/icons/filledHeart.svg" alt="filledHeart" width={27.2} height={27.2} />
    </button>
  );
};

export default FilledHeart;
