import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  username: string;
  dateJoined: string;
  profile: string;
  description: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  email: string;
}

export interface userInitialState {
  user: User;
}

const initialState: userInitialState = {
  user: <User>{},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = <User>{};
    },
  },
});

export const { updateUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
