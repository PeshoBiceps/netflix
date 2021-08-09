import styled from "styled-components";

const Section5 = () => {
  return (
    <Container>
      <Wrap>
        <ImageCard>
          <img
            src="https://occ-0-3466-1489.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd"
            alt=""
          />
        </ImageCard>

        <TextCard>
          <h1>Create profiles for kids.</h1>
          <h2>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </h2>
        </TextCard>
      </Wrap>
    </Container>
  );
};

export default Section5;

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
    flex-direction: column-reverse;
  }
`;
const ImageCard = styled.div`
  img {
    width: 100%;
    min-width: 520px;
    @media(max-width:600px){
      min-width: 200px;
    }
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
