import React from "react";
import styled from "styled-components";

import * as styles from "../../../styles/Variables";

const Rotation = -5;
const width = 100;
const fullWidth = 100;
// const MagicNumber = 0.09719;
const RotationDeg = Rotation * (Math.PI / 180);
const MagicNumber = Math.tan(RotationDeg) / 2;
const SkewPadding = Math.abs(width * MagicNumber);
const ClipPadding = fullWidth * MagicNumber;

const DiagonalDiv = styled.div`
  position: relative;
  padding: ${SkewPadding}vw 0;
  margin-top: -1px;
  &::before {
    content: "a";
    color: rgba(0, 0, 0, 0);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: ${styles.styles.colors.brandGreyLight};
    background-image: ${(props) =>
      props.bgImage !== undefined
        ? `url( ${Object.values(props.bgImage)[0]} )`
        : undefined};
    background-size: cover;
    background-position: center;
    transform: skewY(${Rotation}deg);
    transform-origin: 50% 0;
    backface-visibility: hidden;
  }
`;

const ContentDiv = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  padding: 1.5em;
  position: relative;
`;
const Diagonal = (props) => {
  return (
    <DiagonalDiv {...props}>
      <ContentDiv>{props.children}</ContentDiv>
    </DiagonalDiv>
  );
};

export default Diagonal;
