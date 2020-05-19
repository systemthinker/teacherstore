import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './productCard.css'
import { Link } from 'react-router-dom'


const selectTeachers = (reduxState) =>{
    return reduxState.teachers
}

export default function ProductCard() {
    const teachers = useSelector(selectTeachers)

    return (
        <div>
            {teachers.map((teacher)=>{
                return (
                <div key={teacher.id}>   
                   <Link to={`/details/${teacher.name}`} >
                    <button>{teacher.name}</button>
                </Link>
                    <h3>{teacher.name}</h3>
                <p className="introStyle">{teacher.intro}</p>
                </div>         
                )
            })}



        </div>
    )
}
