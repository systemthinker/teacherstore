import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./productCard.css";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import RemoveFromCartButton from "./RemoveFromCartButton";
import SortByMenu from './SortByMenu'
import { selectTeachers, selectFilteredTeachers } from '../store/teachers/selectors'



export default function ProductCard(props) {
 
  // const [filterByTechnology, setFilterByTechnology] = useState("JavaScript")

  const teachers = useSelector(selectTeachers)

  console.log('teachers???', teachers)

  const filteredTeachers = useSelector(selectFilteredTeachers)

  console.log('filtedteachers', filteredTeachers)

 

  

  function displayTeachers(){
    if (filteredTeachers.length === 0){
      return teachers
    } else {
      return filteredTeachers
    }
  }

  const result = displayTeachers();

  return (
    <div>

      {result.map((teacher) => {
        return (
          <div key={teacher.id}>
            <Link to={`/details/${teacher.name}`}>
              <button>{teacher.name}</button>
            </Link>
            <h3>{teacher.name}</h3>
            <p className="introStyle">{teacher.intro}</p>
            
            {teacher.technologies.map((tag)=>{
                return <span key={tag.id}className="Tag">{`${tag.title} `}</span>
                })}  

            <AddToCartButton />
            <RemoveFromCartButton />
          </div>
        );
      })}
    </div>
  );
}
