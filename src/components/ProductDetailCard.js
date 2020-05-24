import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './productCardDetails.css'
import { useHistory } from 'react-router-dom'
import { selectTeachers } from '../store/teachers/selectors'




export default function ProductDetailsCard() {
    const teachers = useSelector(selectTeachers)
    const history = useHistory();
    const pathName = history.location.pathname
    const languageFromPath = pathName.replace('/details/','')

    const filteredTeacher = teachers.filter((teacher)=>{

        return teacher.name.indexOf(languageFromPath) > -1
       
           
    })

   


    return (
        <div>
            {filteredTeacher.map((teacher)=>{
                return (
                <div key={teacher.id}>   
                    <h3>{teacher.name}</h3>
                    <h5>contact: {teacher.email}</h5>
                <p className="introStyle">{teacher.intro}</p>
                
                 {teacher.technologies.map((tag)=>{
                     
                    return <span key={tag.id} className="Tag">{tag.title}</span>
                })}

                </div>         
                )
            })}



        </div>
    )
}
