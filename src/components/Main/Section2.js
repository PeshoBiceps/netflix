import styled from "styled-components";

const Section2 = () => {
  return (
    <Container>
      <Wrap>
        <TextCard>
          <h1>Enjoy on your TV.</h1>
          <h2>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h2>
        </TextCard>

        <VideoCard>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="tv"
          />

          <video autoPlay={true} playsInline={true} muted={true} loop={true}>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              type="video/mp4"
            />
          </video>
        </VideoCard>
      </Wrap>
    </Container>
  );
};

export default Section2;

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
  padding: 30px 30px 60px 30px;
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
    min-width: 520px;
    @media(max-width:600px){
      min-width: 200px;
    }
  }
  video {
    position: absolute;
    top: 20%;
    right: 13%;
    max-width: 75%;
    z-index: 1;
  }
`;
