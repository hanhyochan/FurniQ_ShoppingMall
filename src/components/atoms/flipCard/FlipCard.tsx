import styled from '@emotion/styled';
import { media } from '@/styles/utils/media';
import { useState, useEffect } from 'react';

type FlipCardProps = {
  frontImage: string;
  backImage: string;
  intervalSeconds: number; // 몇 초마다 뒤집을지 (초 단위)
};

const cardContainer = css`
  perspective: 1000px;
  width: 200px;
  height: 300px;
`;

const cardInner = (isFlipped: boolean) => css`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;

const cardFace = css`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  overflow: hidden;
`;

const cardFront = css`
  ${cardFace};
`;

const cardBack = css`
  ${cardFace};
  transform: rotateY(180deg);
`;

const FlipCard = ({ frontImage, backImage, intervalSeconds }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, intervalSeconds * 1000);

    return () => clearInterval(interval);
  }, [intervalSeconds]);

  return (
    <div css={cardContainer}>
      <div css={cardInner(isFlipped)}>
        <img src={frontImage} alt="앞면" css={cardFront} />
        <img src={backImage} alt="뒷면" css={cardBack} />
      </div>
    </div>
  );
};

export default FlipCard;
