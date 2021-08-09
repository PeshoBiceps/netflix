import { configureStore } from '@reduxjs/toolkit'
import movieSlice from '../features/movie/movieSlice'
import userReducer from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieSlice,
  },
})