import React, {useState, useEffect} from 'react'
import { selectTeachers } from '../store/selectors'
import { useSelector,useDispatch } from 'react-redux';

export default function SortByMenu() {
  
const teachers = useSelector(selectTeachers)
const dispatch = useDispatch();
const [sortBy, setSortBy] = useState('priceHighest')

function comparePriceHighest(teacherA, teacherB) {
  
    return teacherB.price - teacherA.price;
  }

function compareName(teacherA, teacherB){
        return teacherA.name.localeCompare(teacherB.name)
       
    } 

function comparePopularity(teacherA, teacherB){
        return teacherB.totalBookings - teacherA.totalBookings;
         
        }   
function comparePriceLowest(teacherA, teacherB){
    return teacherA.price - teacherB.price
}          
  
let sortedTeachers = sortBy === "priceHighest" ? teachers.sort(comparePriceHighest) : teachers;
sortedTeachers = sortBy === "name" ? teachers.sort(compareName) : teachers;
sortedTeachers = sortBy === "timesBooked" ? teachers.sort(comparePopularity) : teachers;
sortedTeachers = sortBy === "priceLowest" ? teachers.sort(comparePriceLowest) : teachers;








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
                <option value="priceHighest">Sort by Highest price</option>
                <option value="priceLowest">Sort by lowest price</option>
                <option value="name">Sort by name</option>
                <option value="timesBooked">Sort by popularity</option>
            </select>
         </p>

         
    </div>


)     



}