const initialState = {

    currentTechnologySelected: "",
    filteredTeachersByTechnology: [],
    
  
       
    }


 
    
            
  
  export default function filterReducer(state = initialState, action) {
    switch (action.type) {
      case "FILTER_BY_TECHNOLOGY":
      
        return {
        ...state,
        currentTechnologySelected: action.payload
        
        
        }
      case "FILTERED_TEACHERS_BY_TECHNOLOGY":
      console.log('??? was called')
      return {

      }
      
      
        
            
          
      default: {
        
        return state;
      }
    }
  }