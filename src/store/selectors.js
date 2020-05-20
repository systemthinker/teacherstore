export const selectTeachers = (state) => {
  return state.teachers;
};

export const selectUsers = (state) => {
  return state.users;
};

export const selectShoppingBasket = (state) => {
  return state.users.basket
}
