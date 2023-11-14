import React from "react";
import styled from "styled-components";
import { color, space, typography, shadow } from "styled-system";

const Paragraph = styled.a`
  font-size: 20px;
  font-weight: 300;
  letter-spacing: -0.66px;
  line-height: 35px;
  text-decoration: none;
  ${color};
  ${space};
  ${typography};
  ${shadow};
  &:hover,
  &:active,
  &.active {
    ${color};
    text-decoration: none;
  }
`;

const A = ({ href = "#", ...props }) => {
  return <Paragraph href={href} color="white" {...props} />;
};

export default A;
