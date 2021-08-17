import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: JSON.parse(localStorage.getItem("userName")),
  userEmail: JSON.parse(localStorage.getItem("userEmail")),
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userName = action.payload.userName
      state.userEmail = action.payload.userEmail
    },
    setUserLogOut: state => {
      state.userName = null
      state.userEmail = null
    }
  }
})

export const {setActiveUser, setUserLogOut} = userSlice.actions

export default userSlice.reducer