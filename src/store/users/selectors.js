export const selectUsers = (state) => {
    return state.users.users;
  };
  
  export const selectShoppingBasket = (state) => {
    return state.users.users.map((user)=> user.basket)
  }