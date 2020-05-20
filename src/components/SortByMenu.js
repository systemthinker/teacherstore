import React, {useState, useEffect} from 'react'
import { selectTeachers } from '../store/selectors'
import { useSelector,useDispatch } from 'react-redux';

export default function SortByMenu() {
  
const teachers = useSelector(selectTeachers)
const dispatch = useDispatch();
const [sortBy, setSortBy] = useState('price')

function comparePrice(teacherA, teacherB) {
  
    return teacherB.price - teacherA.price;
  }

function compareName(teacherA, teacherB){
        return teacherA.name.localeCompare(teacherB.name)
       
    } 
  
const sortedTeachers = sortBy === "price" ? teachers.sort(comparePrice) : teachers.sort(compareName);



useEffect(() => {
    
    const action = {
        type: "CHANGE_SORTING",
        payload: sortedTeachers
        } 
        dispatch(action) 
    
}, [sortBy])







  

return (
    <div className="App">
        <p>
            Sort order:{" "}
            <select onChange={(e)=>setSortBy(e.target.value)}>
                <option value="price">Sort by price</option>
                <option value="name">Sort by name</option>
            </select>
         </p>

         
    </div>


)     



}