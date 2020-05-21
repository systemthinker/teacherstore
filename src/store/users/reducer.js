const initialState = {
  
  users:[
 
        {
            id: 1,
            name: "Henk",
            basket: [1, 3],
        },
        {
            id: 2,
            name: "Sjaakie",
            basket: [1,2,3],   
        },

      ]  
    
    
}  

  
  export default function usersSliceReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_ITEM":
      return {
        ...state,
        user: { ...state.users, basket: [...state.users.basket, action.payload] },
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        users: {
          ...state.users,
          basket: [
            ...state.users.basket.filter((item) => {
              if (item !== action.payload) {
                return { ...state };
              } else {
                return;
              }
            }),
          ],
        },
      };
      default: {
        return state;
      }
    }
  }