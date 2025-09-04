import { createSlice } from '@reduxjs/toolkit';

export interface UserType {
  firstName: string;
  lastName: string;
  userId: number;
}
const initialState: UserType = {
  firstName: 'Mila',
  lastName: 'Kowalska',
  userId: 1,
};

export const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    // Defining the "updateFirstName" reducer function
    // It takes the current state and an action object as parameters
    // It updates the firstName field of the state with the payload value of the action
    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
  },
});

export const { updateFirstName } = User.actions;
export default User.reducer;
