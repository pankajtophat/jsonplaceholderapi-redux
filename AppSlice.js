import { createSlice } from "@reduxjs/toolkit";

export const AppSlice = createSlice({
  name: "companyList",
  initialState: {
    posts: [],
    users: [],
    comments: [],
  },
  reducers: {
    addPosts: (state, action) => {
      state.posts = action.payload;
    },
    addUsers: (state, action) => {
      state.users = action.payload;
    },
    addComments: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export const { addComments, addPosts, addUsers } = AppSlice.actions;
export default AppSlice.reducer;
