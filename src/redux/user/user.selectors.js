import { createSelector } from "reselect";

// this function gets the whole state and just returns a slice of it
const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
