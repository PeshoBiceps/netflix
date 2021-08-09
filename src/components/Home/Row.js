import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";



const Row = () => {

  const movie = useSelector(state => {
    // console.log(state.movie)
    return state.movie
  })

  return (
    <Container>
      <Wrap>
        {/* {movie.action.map((data, i) => (
          <h1>{data.original_title}</h1>
        ))} */}
      </Wrap>
    </Container>
  );
};

export default Row;

const Container = styled.div`
  padding: 0 0 26px;
`;
const Wrap = styled.div`

`
