import React from "react";
import styled from "styled-components";

const ContactButton = ({ anchor }) => {
  return (
    <Button href={`mailto:${anchor}?subject=Let%27s Work`}>
      <Text>Contact Me</Text>
    </Button>
  );
};

const Button = styled.a`
  transition: border-color 444ms;
  border: 0.3rem solid #888;
  display: inline-block;
  overflow: hidden;
  position: relative;
  &:hover {
    border: 0.3rem solid #bbb;
  }
`;

const Text = styled.span`
  font-size: 1.6rem;
  padding: 1.4rem 3.5rem;
  transition: color 444ms;
  color: #888;
  display: inline-block;
  font-weight: 700;
  text-transform: uppercase;
  ${Button}:hover & {
    color: #bbb;
  }
  @media all and (min-width: 50em) {
    font-size: 1.8rem;
  }
`;

export default ContactButton;
