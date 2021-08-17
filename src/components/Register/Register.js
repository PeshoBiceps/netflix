import styled from "styled-components";
import { auth } from "../../firebase";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveUser } from "../../features/user/userSlice";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

const Register = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  // const passwordConfirmRef = useRef(null);

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
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

  return (
    <Container>
      {user.userEmail && <Redirect to="/home" />}
      <Form>
        <h1>Sign Up</h1>

        <input ref={emailRef} type="email" placeholder="Email" required />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          required
        />
        {/* <input
          ref={passwordConfirmRef}
          type="password"
          placeholder="Confirm Password"
          required
        /> */}
        <button type="submit" onClick={signUp}>
          Register
        </button>
      </Form>
      <p>
        Already have an account ? <Link to="/login">Log In</Link>
      </p>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  min-height: 700px;
  height: 100vh;
  background-color: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    color: #e50914;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  input {
    height: 50px;
    background-color: #333232;
    color: #ffffff;
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
  button {
    height: 50px;
    background-color: #e50914;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    margin: 10px 0 12px;
    cursor: pointer;
    transition: 0.1s ease-in-out;
    :hover {
      background-color: #f40612;
    }
  }
`;
