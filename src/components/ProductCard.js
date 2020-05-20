import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./productCard.css";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import RemoveFromCartButton from "./RemoveFromCartButton";
import SortByMenu from './SortByMenu'

const selectTeachers = (reduxState) => {
  return reduxState.teachers;
};

export default function ProductCard(props) {
  const sorted = props.sorted

  const teachers = useSelector(selectTeachers);
  console.log('teachers', teachers)

  return (
    <div>
      {teachers.map((teacher) => {
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
