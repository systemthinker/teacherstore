export const selectTechnologies = (state) => {
    console.log('state teachers', state)
    const mappedTechnologies = state.teachers.teachers.map(
      (teacher) => { return teacher.technologies.map((technologie)=>{
        return technologie.title
      })})
    return mappedTechnologies; 
  }

export const selectTeachers = (state) => {
    return state.teachers.teachers;
  };  

export const selectFilteredTeachers = filterByTechnology => {

    return state => {
        
        return state.teachers.teachers.filter(teacher =>{ 
        
        return teacher.technologies.find(t=> t.title === filterByTechnology)
        
        })
    
  
    
    };
  };  
