import { useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "../../firebase";
import { useDispatch } from "react-redux";
import { setActiveUser } from "../../features/user/userSlice";

const LoginCard = () => {
  const dispatch = useDispatch();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((result) => {
        console.log(result);
        dispatch(
          setActiveUser({
            userEmail: result.user.email,
          })
        );
        localStorage.setItem("userEmail", JSON.stringify(result.user.email));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignInGuest = (e) => {
    e.preventDefault();
    dispatch(
      setActiveUser({
        userEmail: 'Guest@guest.com',
      })
    );
    localStorage.setItem("userEmail", JSON.stringify('Guest@guest.com'));
  }

  const handleSignInWithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(
          setActiveUser({
            userName: result.user.displayName,
            userEmail: result.user.email,
          })
        );
        localStorage.setItem(
          "userName",
          JSON.stringify(result.user.displayName)
        );
        localStorage.setItem("userEmail", JSON.stringify(result.user.email));
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Container>
      <Wrap>
        <h1>Sign In</h1>
        <Form>
          <input ref={emailRef} type="text" placeholder="Email" required />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
          <SignIn onClick={handleSignIn}>Sign In</SignIn>
        </Form>
        <Guest onClick={handleSignInGuest}>Continue as guest</Guest>
        <p style={{ cursor: "pointer" }} onClick={handleSignInWithGoogle}>
          <FcGoogle />
          Login with Google
        </p>
        <p>
          New to Netflix?<Link to="/register">Sign up now.</Link>
        </p>
      </Wrap>
    </Container>
  );
};

export default LoginCard;

const Container = styled.div`
  width: 100%;
  min-width: 430px;
  background-color: #000000c1;
  text-align: left;
  @media (max-width: 550px) {
    min-width: 200px;
  }
`;

const Wrap = styled.div`
  padding: 30px 60px;
  p {
    display: flex;
    align-items: center;
    color: #737373;
  }
  a {
    color: #fff;
    text-decoration: none;
    padding-left: 4px;
  }
  @media (max-width: 550px) {
    padding: 20px 40px;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  input {
    height: 50px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 4px;
    margin: 8px 0px;
    padding: 0px 18px;
    outline: none;
    font-size: 16px;
    :focus {
      background-color: #575757;
    }
  }
`;
const SignIn = styled.button`
  height: 50px;
  background-color: #e50914;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  margin: 24px 0 12px;
  cursor: pointer;
  transition: 0.1s ease-in-out;
  :hover {
    background-color: #f40612;
  }
`;
const Guest = styled.button`
  height: 50px;
  width: 100%;
  background-color: #4e4e4e;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  margin: 2px 0 12px;
  cursor: pointer;
`;
