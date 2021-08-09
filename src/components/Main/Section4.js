import styled from "styled-components";

const Section4 = () => {
  return (
    <Container>
      <Wrap>
        <TextCard>
          <h1>Watch everywhere.</h1>
          <h2>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
          </h2>
        </TextCard>

        <VideoCard>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
            alt="tv"
          />

          <video autoPlay={true} playsInline={true} muted={true} loop={true}>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
              type="video/mp4"
            />
          </video>
        </VideoCard>
      </Wrap>
    </Container>
  );
};

export default Section4;

const Container = styled.div`
  margin-top: 8px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;
  padding: 30px;
  @media (max-width: 1000px) {
    text-align: center;
    flex-direction: column;
  }
`;
const TextCard = styled.div`
  h1 {
    font-size: 50px;
  }
  h2 {
    font-size: 26px;
    font-weight: 400;
  }
  @media (max-width: 510px) {
    h1 {
      font-size: 26px;
    }
    h2 {
      font-size: 18px;
    }
  }
`;
const VideoCard = styled.div`
  position: relative;
  img {
    position: relative;
    z-index: 2;
    max-width: 100%;
    min-width: 500px;
    @media(max-width:600px){
      min-width: 200px;
    }
  }
  video {
    position: absolute;
    top: 10%;
    right: 18%;
    max-width: 64%;
    z-index: 1;
  }
`;
