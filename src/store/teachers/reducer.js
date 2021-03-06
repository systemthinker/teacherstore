const initialState = {

  teachers : [
        {
          id: 1,
          email: "kelley@codaisseur.com",
          name: "Kelley",
          intro: "Hi there! I'm Kelley, teacher of JavaScript, student of life",
          github_username: "kelleyvanevert",
          website: "https://hi-im-kelley.netlify.com/",
          createdAt: "2020-03-10T14:44:44.335Z",
          price: 1,
          totalBookings: 50,
          technologies: [
            {
              id: 1,
              title: "JavaScript",
            },
            {
              id: 2,
              title: "TypeScript",
            },
            {
              id: 5,
              title: "Promise.all",
            },
          ],
        },
    
        {
          id: 2,
          email: "rein@codaisseur.com",
          name: "Rein",
          intro: "CHECK YOSELF BEFORE YO WRECK YOSELF #thuglyfe",
          github_username: "Reinoptland",
          website: null,
          price: 2,
          totalBookings: 666,
          createdAt: "2020-03-10T14:44:44.336Z",
          technologies: [
            {
              id: 1,
              title: "JavaScript",
            },
            {
              id: 6,
              title: "Learning strategies",
            },
          ],
        },
        {
          id: 3,
          email: "matias@codaisseur.com",
          name: "Matias",
          intro: "Hi! I'm Matias, teacher of Codaisseur, from Uruguay!",
          github_username: "matiagarcia91",
          website: null,
          price: 3,
          totalBookings: 150,
          createdAt: "2020-03-10T14:44:44.336Z",
          technologies: [
            {
              id: 3,
              title: "Being Chill",
            },
            {
              id: 4,
              title: "Droppin da tunes",
            },
          ],
        }, 
      ],
      filteredTeachers : []
    }

  // function filterTeachers(filterByTechnology){
  //   return state.teachers.teachers.filter(teacher =>{ 
        
  //     return teacher.technologies.find(t=> t.title === filterByTechnology)  
  //   })
  // }
  
  
    
            
  
  export default function teachersSliceReducer(state = initialState, action) {
    switch (action.type) {

      case "FILTER_BY_TECHNOLOGY":

      
        const filterByTechnology = action.payload;
        
       
       
        function filterTeachers(filterByTechnology) {
          return state.teachers.filter(teacher =>{ 
              
                return teacher.technologies.find(t=> t.title === filterByTechnology)  
              })
      
        }

        const result = filterTeachers(filterByTechnology);
        
        
        return {
        ...state,
        filteredTeachers: [...result]
                
        }
      


        case "CHANGE_SORTING":
      

            return {
                

            
              ...state,
              filteredTeachers: [...action.payload]
              
            }; 

        case "RESET_FILTERS":
          
        return {
          ...state,
          filteredTeachers: [...action.payload]
        }
        
         
          
          
            
          
      default: {
        
        return state;
      }
    }
  }