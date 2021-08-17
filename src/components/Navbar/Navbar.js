import { useSelector } from "react-redux";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = useSelector((state) => state.user);

  const [show, setShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <Container
      style={
        show
          ? { backgroundColor: "#000000e8" }
          : { backgroundColor: "transparent" }
      }
    >
      <Logo>
        <Link to="/">
          <img src="./images/logo.svg" alt="netflix-logo" />
        </Link>
      </Logo>

      {user.userEmail === null ? (
        <Login>
          <Link to="/login">Sign In</Link>
        </Login>
      ) : (
        <LoggedIn>
          <Avatar>
            <span>{user.userName ? `Hello ${user.userName}` : ""}</span>
            <Link to="/profile">
              <img
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                alt="avatar"
              />
            </Link>
          </Avatar>
        </LoggedIn>
      )}
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  z-index: 9999;
  transition: 0.2s ease-in;
`;
const Logo = styled.div`
  width: 210px;
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 600px) {
    width: 150px;
  }
`;
const Login = styled.div`
  background-color: #e50914;
  display: flex;
  border-radius: 2px;
  transition: 0.1s ease-in-out;
  cursor: pointer;
  margin-right: 16px;
  a {
    font-size: 16px;
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 86px;
    height: 40px;
  }
  :hover {
    background-color: #f40612;
  }
`;
const LoggedIn = styled.div`
  position: relative;
  top: 0;
  right: 0;
`;

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  img {
    max-width: 60px;
    height: 100%;
    cursor: pointer;
  }
  span {
    padding-right: 8px;
  }
`;
