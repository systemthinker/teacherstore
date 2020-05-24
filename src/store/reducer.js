import { combineReducers } from "redux";
import usersSliceReducer from './users/reducer'
import teachersSliceReducer from './teachers/reducer'
import filterReducer from "./teachers/filterReducer";

const reducer = combineReducers({
  users: usersSliceReducer,
  teachers: teachersSliceReducer,
  filter: filterReducer,
  
});

export default reducer;
