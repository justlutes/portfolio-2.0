import React from "react";
import styled from "styled-components";

const ProfileImage = ({ alt, url }) => {
  return (
    <Image>
      <img src={url} alt={alt} />
      <HighlightFirst>
        <Highlight />
      </HighlightFirst>
      <HighlightSecond>
        <Highlight />
      </HighlightSecond>
      <HighlightThird>
        <Highlight />
      </HighlightThird>
    </Image>
  );
};

const Highlight = styled.div`
  bottom: 0;
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  background-color: #1c1c1c;
  opacity: 0.5;
`;

const HighlightFirst = styled.div`
  position: absolute;
  overflow: hidden;
  height: calc(100% / 4.286);
  left: 0;
  right: auto;
  top: calc(100% / 4.286);
  width: calc(100% / 3.286);
`;

const HighlightSecond = styled.div`
  position: absolute;
  overflow: hidden;
  bottom: auto;
  height: calc(100% / 3.865);
  top: 0;
  width: calc(100% / 2.555);
  right: 0;
`;

const HighlightThird = styled.div`
  position: absolute;
  overflow: hidden;
  bottom: auto;
  height: calc(100% / 3.865);
  top: calc(100% / 1.865);
  width: calc(100% / 1.555);
  right: 0;
`;

const Image = styled.div`
  width: 100%;
  position: relative;
  order: 1;
  @media all and (min-width: 50em) {
    width: 45%;
    order: 2;
  }
  &::before {
    height: calc(100% / 4.286);
    width: calc(100% / 3.286);
    background-color: #1c1c1c;
    content: "";
    position: absolute;
    top: 0;
    transform: translate3d(0, 0, 0);
    z-index: 2;
  }
`;

export default ProfileImage;
