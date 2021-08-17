import React from "react";
import styled from "styled-components";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <Container>
      <Wrap>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <Register>
          <Link to="/register">
            Get Started
            <FaAngleRight />
          </Link>
        </Register>
      </Wrap>
    </Container>
  );
};

export default Section1;

const Container = styled.div`
  min-height: 500px;
  height: 103vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.86),
      rgba(0, 0, 0, 0.26),
      rgba(0, 0, 0, 0.86)
    ),
    url("https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/5ec1abd5-b4e2-416f-9c13-ea81d2a372a0/BG-en-20210719-popsignuptwoweeks-perspective_alpha_website_large.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-y: hidden;
  @media (max-width: 440px) {
    height: 70vh;
  }
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 700px;
  h1 {
    font-size: 60px;
    margin: 8px;
    @media (max-width: 510px) {
      font-size: 32px;
    }
  }
  h2 {
    font-size: 26px;
    font-weight: 400;
    margin: 8px;
    @media (max-width: 510px) {
      font-size: 20px;
    }
  }
  h3 {
    font-size: 19px;
    font-weight: 400;
    margin: 8px;
    @media (max-width: 510px) {
      font-size: 16px;
    }
  }
`;
const Register = styled.div`
  margin-top: 10px;
  background-color: #e50914;
  display: flex;
  border-radius: 2px;
  transition: 0.1s ease-in-out;
  cursor: pointer;
  a {
    font-size: 20px;
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 186px;
    height: 50px;
  }
  :hover {
    background-color: #f40612;
  }
`;
