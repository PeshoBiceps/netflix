import styled from "styled-components";

const Row = ({ title, data, isLarge = false }) => {
  const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <Container>
      <h2>{title}</h2>
      <Wrap>
        {data.map(
          (data) =>
            ((isLarge && data.poster_path) ||
              (!isLarge && data.backdrop_path)) && (
              <Poster
                style={
                  isLarge ? { maxHeight: "280px" } : { maxHeight: "130px" }
                }
                key={data.id}
                src={`${base_url}${isLarge ? data.poster_path : data.backdrop_path
                  }`}
                alt={data.title}
              />
            )
        )}
      </Wrap>
    </Container>
  );
};

export default Row;

const Container = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`;

const Wrap = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Poster = styled.img`
  object-fit: contain;
  margin-right: 10px;
  width: 100%;
  transition: transform 450ms;
  :hover {
    transform: scale(1.08);
    opacity: 1;
  }
`;
