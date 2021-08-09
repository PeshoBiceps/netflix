import React from "react";
import styled from "styled-components";
import Questions from "./Questions";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

const Main = () => {
  return (
    <Container>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Questions />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  margin-top: -100px;
`;
