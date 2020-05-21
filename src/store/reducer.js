import { combineReducers } from "redux";
import usersSliceReducer from './users/reducer'
import teachersSliceReducer from './teachers/reducer'

const reducer = combineReducers({
  users: usersSliceReducer,
  teachers: teachersSliceReducer,
  
});

export default reducer;
