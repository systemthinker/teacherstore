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
        
        // const flattenedTechnologies = state.teachers.teachers.map(teacher => teacher.technologies).flat().map(e=>e.title)
        
        // const removeDuplicatedTechnologies = [...new Set(flattenedTechnologies)];
    
        // console.log('removeDuplicatedTechnologies', removeDuplicatedTechnologies)  
        
        // const test = state.teachers.teachers.map(teacher => teacher.technologies.map((tech)=> tech.title))
        // console.log('test', test)
        // const test2 = test.forEach(e=> e.includes("Being Chill", "Droppin da tunes"))
        // console.log('test2', test2)

        // const tag = 1;
        // const tag2 = "JavaScript"
    return state.teachers.teachers.filter(teacher =>{ 
        
        return teacher.technologies.find(t=> t.title === filterByTechnology)
        
        })
    

        //teacher.technologies.map((tech)=> tech.title).includes("JavaScript"))
    
    };
  };  
