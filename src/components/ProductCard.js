import React from "react";
import { useSelector } from "react-redux";
import "./productCard.css";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import RemoveFromCartButton from "./RemoveFromCartButton";

import { selectTeachers, selectFilteredTeachers } from '../store/teachers/selectors'



export default function ProductCard() {
 


  const teachers = useSelector(selectTeachers)

  

  const filteredTeachers = useSelector(selectFilteredTeachers)

  

 

  

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
