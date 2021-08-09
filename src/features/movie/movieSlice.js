import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  trending: [],
  netflixOriginals: [],
  topRated: [],
  action: [],
  comedy: [],
  horror: [],
  romance: [],
  documentaries: [],
}

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.trending = action.payload.trending;
      state.netflixOriginals = action.payload.netflixOriginals;
      state.topRated = action.payload.topRated;
      state.action = action.payload.action;
      state.comedy = action.payload.comedy;
      state.horror = action.payload.horror;
      state.romance = action.payload.romance;
      state.documentaries = action.payload.documentaries;
    },
  }
})

export const { setMovies } = movieSlice.actions

export default movieSlice.reducer