import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { setUserLogOut } from "../../features/user/userSlice";
import { auth } from "../../firebase";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(user);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUserLogOut());
        localStorage.clear();
      })
      .catch((err) => alert(err.message));
  };

  return (
    <Container>
      {!user.userEmail ? (
        <Redirect to="/" />
      ) : (
        <Wrap>
          <h1>Edit Profile</h1>
          <ProfileInfo>
            <img
              src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
              alt=""
            />
            <ProfileDetails>
              <h2>{user.userEmail}</h2>
              <ProfilePlans>
                <h3>Plans</h3>
                <SignOut onClick={handleSignOut}>Sign Out</SignOut>
              </ProfilePlans>
            </ProfileDetails>
          </ProfileInfo>
        </Wrap>
      )}
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  min-height: 700px;
  height: 100vh;
  background-color: #1b1b1b;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 200px 20px 0px 20px;
  max-width: 800px;
  h1 {
    font-size: 48px;
    font-weight: 400;
    border-bottom: 1px solid #282c2d;
    margin-bottom: 20px;
  }
`;
const ProfileInfo = styled.div`
  display: flex;
  img {
    height: 100px;
  }
`;
const ProfileDetails = styled.div`
  margin-left: 25px;
  flex: 1;
  h2 {
    margin: 0;
    background-color: gray;
    padding: 15px;
    font-size: 15px;
    padding-left: 20px;
  }
`;
const ProfilePlans = styled.div`
  h3 {
    border-bottom: 1px solid #282c2d;
    padding-bottom: 10px;
  }
`;

const SignOut = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 5%;
  width: 100%;
  color: #fff;
  background-color: #e50914;
  border: none;
  cursor: pointer;
  transition: 0.1s ease-in;
  :hover{
    background-color: #c41821;
  }
`;
