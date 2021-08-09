import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import { setUserLogOut } from "../../features/user/userSlice";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUserLogOut());
      })
      .catch((err) => alert(err.message));
  };

  return (
    <Container>
      <Logo>
        <Link to="/">
          <img src="./images/logo.svg" alt="netflix-logo" />
        </Link>
      </Logo>

      {user.userName === null ? (
        <Login>
          <Link to="/login">Sign In</Link>
        </Login>
      ) : (
        <LoggedIn>
          <Avatar>
            <span>Hello, {user.userName}</span>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
              alt="avatar"
            />
          </Avatar>
          <SignOut>
            <span onClick={handleSignOut}>Log Out</span>
          </SignOut>
        </LoggedIn>
      )}
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
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
const Login = styled.button`
  width: 86px;
  height: 36px;
  background-color: #e50914;
  color: #fff;
  border-radius: 3px;
  padding: 10px;
  margin-right: 16px;
  font-weight: 400;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  a {
    text-decoration: none;
    &:visited {
      color: #fff;
    }
  }
`;

const SignOut = styled.div`
  background-color: #333;
  position: absolute;
  top: 60px;
  right: 0;
  width: 100px;
  height: 50px;
  border-radius: 4px;
  display: none;
  cursor: pointer;
  a {
    text-decoration: none;
  }
`;

const LoggedIn = styled.div`
  position: relative;
  top: 0;
  right: 0;
  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 60px;
    height: 100%;
  }
  span {
    padding-right: 8px;
  }
`;
