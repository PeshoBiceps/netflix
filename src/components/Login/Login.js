import styled from "styled-components"
import LoginCard from "./LoginCard"
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {

  const user = useSelector(state => state.user)

  return (
    <Container>
      {
        user.userName &&
        <Redirect to='/home' />
      }
      <Wrap>
        <LoginCard />
      </Wrap>
    </Container>
  )
}

export default Login

const Container = styled.div`
  margin-top: -110px;
  height: 113vh;
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
  
  @media (max-width: 440px) {
    background: #000;
  }
`;
const Wrap = styled.div`
  margin-top: 100px;
  @media (max-width: 550px) {
   margin-top: 10px;
  }

`