import React from "react";
import styled from "styled-components";

const SectionTagLine = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};

const Wrapper = styled.div`
    font-size: calc(2rem + (3 - 2) * (100vw - 32rem)/ (76.8 - 32));
    font-weight: 600;
    line-height: 1.3;
    text-align: right;
    margin-top: calc(4rem + (6 - 4) * (100vw - 32rem)/ (76.8 - 32));
`;

export default SectionTagLine;
