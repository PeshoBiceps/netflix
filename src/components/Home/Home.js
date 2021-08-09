import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { setMovies } from "../../features/movie/movieSlice";
import requests from '../../Requests';
import MovieBanner from './MovieBanner'
import Row from './Row';

const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const request0 = await axios.get(`${requests.fetchTrending}`)
      const request1 = await axios.get(`${requests.fetchNetflixOriginals}`)
      const request2 = await axios.get(`${requests.fetchActionMovies}`);
      const request3 = await axios.get(`${requests.fetchTopRated}`);
      const request4 = await axios.get(`${requests.fetchComedyMovies}`)
      const request5 = await axios.get(`${requests.fetchHorrorMovies}`)
      const request6 = await axios.get(`${requests.fetchRomanceMovies}`);
      const request7 = await axios.get(`${requests.fetchDocumentaries}`);
      dispatch(setMovies({
        trending: request0.data.results,
        netflixOriginals: request1.data.results,
        topRated: request2.data.results,
        action: request3.data.results,
        comedy: request4.data.results,
        horror: request5.data.results,
        romance: request6.data.results,
        documentaries: request7.data.results
      })
      )
    }

    fetchData()
  }, [dispatch])

  return (
    <Container>
      {/* {user.userName === null && <Redirect to="/login" />} */}
      <Wrap>
        <MovieBanner />
        <Row />
      </Wrap>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 103vh;
  background-color: #111;
`;
const Wrap = styled.div``;
