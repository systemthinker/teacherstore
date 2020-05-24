export const selectTechnologies = (state) => {
    
    const mappedTechnologies = state.teachers.teachers.map(
      (teacher) => { return teacher.technologies.map((technologie)=>{
        return technologie.title
      })})
    return mappedTechnologies; 
  }

export const selectTeachers = (state) => {
    return state.teachers.teachers;
  };  

export const selectFilteredTeachers = (state) => {

  return state.teachers.filteredTeachers
  };  
