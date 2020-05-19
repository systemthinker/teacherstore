import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './productCardDetails.css'
import { useParams, useHistory } from 'react-router-dom'


const selectTeachers = (reduxState) =>{
    return reduxState.teachers
}

export default function ProductDetailsCard() {
    const teachers = useSelector(selectTeachers)
    const params = useParams();
    const history = useHistory();
    const pathName = history.location.pathname
    const languageFromPath = pathName.replace('/details/','')

    const filteredTeacher = teachers.filter((teacher)=>{

        return teacher.name.indexOf(languageFromPath) > -1
       
           
    })

    console.log('filtered', filteredTeacher)

    
    console.log('languageFromPath', languageFromPath)

    // console.log('teacher.technologies', teacher.technologies)

    return (
        <div>
            {filteredTeacher.map((teacher)=>{
                return (
                <div key={teacher.id}>   
                    <h3>{teacher.name}</h3>
                    <h5>contact: {teacher.email}</h5>
                <p className="introStyle">{teacher.intro}</p>
                
                 {teacher.technologies.map((tag)=>{
                     console.log('tag title', tag.title)
                    return <span className="Tag">{tag.title}</span>
                })}

                </div>         
                )
            })}



        </div>
    )
}
