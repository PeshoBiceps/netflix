import styled from "styled-components";
import { useEffect, useState } from "react";

const MovieBanner = () => {
  const API_KEY = "ab1e1be9f5d2dc6c172658f32e6bb35f";

  const [randomMovie, setRandomMovie] = useState([]);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  useEffect(() => {
    let mounted = true;

    const randomMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`
      );
      const data = await res.json();

      const random = await data.results[
        Math.floor(Math.random() * data.results.length - 1)
      ];
      if (mounted) {
        setRandomMovie(random);
      }
    };

    randomMovies();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Container
      style={
        !randomMovie.backdrop_path
          ? {
              backgroundImage: ``,
            }
          : {
              backgroundImage: `linear-gradient(transparent,#000000),url("https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`,
            }
      }
    >
      <Wrap>
        <Title>{randomMovie.name}</Title>
        <Buttons>
          <Button>Play</Button>
          <Button>My List</Button>
        </Buttons>
        <Description>{truncate(randomMovie?.overview, 190)}</Description>
      </Wrap>
    </Container>
  );
};

export default MovieBanner;

const Container = styled.div`
  margin-bottom: -110px;
  height: 700px;
  background-size: cover;
  background-position: center center;
`;
const Wrap = styled.div`
  margin-left: 30px;
  padding-top: 140px;
`;
const Title = styled.h1`
  font-size: 48px;
`;
const Description = styled.h3`
  max-width: 368px;
  padding-top: 12px;
  line-height: 1.3;
  @media (max-width: 600px) {
  }
`;
const Buttons = styled.div``;
const Button = styled.button`
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 2px;
  padding: 8px 16px 8px 16px;
  margin-right: 16px;
  background-color: rgba(51, 51, 51, 0.5);
  :hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;
