export const selectTeachers = (state) => {
  return state.teachers;
};

export const selectUsers = (state) => {
  return state.users;
};

export const selectShoppingBasket = (state) => {
  return state.users.basket
}

export const selectTechnologies = (state) => {
  const mappedTechnologies = state.teachers.map(
    (teacher) => { return teacher.technologies.map((technologie)=>{
      return technologie.title
    })})
  return mappedTechnologies; 
}
