import React from "react";

import SectionHeader from "../molecules/SectionHeader";
import SectionTagLine from "../atoms/SectionTagLine";

const SectionIntro = ({ bottomText, sectionNumber, tagLine, topText }) => {
  return [
    <SectionHeader
      key="header"
      number={sectionNumber}
      top={topText}
      bottom={bottomText}
    />,
    <SectionTagLine key="tag" text={tagLine} />
  ];
};

export default SectionIntro;
