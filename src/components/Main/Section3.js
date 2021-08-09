import styled from "styled-components";

const Section3 = () => {
  return (
    <Container>
      <Wrap>
        <AnimatedCard>
          <Mobile
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="tv"
          />
          <Anime>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              alt="Stranger Things"
            />
            <AnimeText>
              <span>Stranger Things</span>
              <span>Downloading...</span>
            </AnimeText>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
              alt=""
            />
          </Anime>
        </AnimatedCard>

        <TextCard>
          <h1>Download your shows to watch offline.</h1>
          <h2>
            Save your favorites easily and always have something to watch.
          </h2>
        </TextCard>
      </Wrap>
    </Container>
  );
};

export default Section3;

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
    flex-direction: column-reverse;
  }
`;

const AnimatedCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 3;
`;

const Mobile = styled.img`
  max-width: 500px;
  width: 100%;
  height: 100%;
`;

const Anime = styled.div`
  position: absolute;
  top: 72%;
  margin: auto;
  background-color: #000;
  width: 100%;
  max-width: 360px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 2px solid #272727;
  border-radius: 20px;
  img {
    max-width: 50px;
    width: 100%;
    height: auto;
  }
  @media (max-width: 600px) {
    max-width: 280px;
  }
`;
const AnimeText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 26px;
  span {
    :nth-child(2) {
      color: #0071eb;
    }
  }
`;
const TextCard = styled.div`
  flex: 3;
  h1 {
    font-size: 48px;
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
