import React, {useState} from 'react'
import { selectTeachers } from '../store/selectors'
import { useSelector } from 'react-redux';

export default function SortByMenu() {
const [sortBy, setSortBy] = useState('price')    
const teachers = useSelector(selectTeachers)


const changeSorting = event => {
    console.log("new sort order:", event.target.value);
    setSortBy(event.target.value);
  };


function comparePrice(teacherA, teacherB) {
        return teacherB.price - teacherA.price;
      }

function compareName(teacherA, teacherB){
        return teacherA.name.localeCompare(teacherB.name)
    } 

    const teachersSorted = sortBy === "price" ? [...teachers].sort(comparePrice) : [...teachers].sort(compareName);
    console.log('teachersSorted', teachersSorted)
return (
    <div className="App">
        <p>
            Sort order:{" "}
            <select onChange={changeSorting}>
                <option value="price">Sort by price</option>
                <option value="name">Sort by name</option>
            </select>
         </p>

         {/* {teachersSorted.map((teacher)=>{
             return (
                 <div>
                    <ProductCard 
                    incrementScore={incrementScore}
                    />

                 </div>
             )
         })} */}

    </div>


)     



}