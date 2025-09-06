import { createSlice } from '@reduxjs/toolkit';

export interface UserType {
  firstName: string;
  lastName: string;
  userId: number;
  profileImage: string;
}
const initialState: UserType = {
  firstName: 'Mila',
  lastName: 'Kowalska',
  userId: 1,
  profileImage:
    'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
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
    resetToInitialState: () => {
      return initialState;
    },
  },
});

export const { resetToInitialState, updateFirstName } = User.actions;
export default User.reducer;
