import React, {useState, useEffect} from 'react'
import { selectTeachers, selectFilteredTeachers } from '../store/teachers/selectors'
import { useSelector,useDispatch } from 'react-redux';


export default function FilterByMenu() {

// const technologies = useSelector(selectTechnologies).flat() 

// const flattenedTechnologies = [...new Set(technologies)];

// console.log('flattended technologies', flattenedTechnologies)


    



const teachers = useSelector(selectTeachers)
const dispatch = useDispatch();
const [filterByTechnology, setFilterByTechnology] = useState("")

const filteredTeachers = useSelector(selectFilteredTeachers("JavaScript"))

console.log('filtedTeachers222222222222', filteredTeachers)




  



  const teacherArrayCopy = [...teachers];

  const newTeachersFiltered = teacherArrayCopy.filter(teacher => teacher.technologies.map((tech)=> tech.title).includes(filterByTechnology))



  
  





 








useEffect(() => {
    if(filterByTechnology !== ""){
    const action = {
        type: "CHANGE_SORTING_BY_TAG",
        payload: newTeachersFiltered
        } 
        dispatch(action) 
    }
    
}, [filterByTechnology])







  

return (
    <div className="App">
        {/* <p>
            Filter order:{" "}
            <select onChange={(e)=>setFilterByTechnology(e.target.value)}>
               {[...flattenedTechnologies].map((technology)=>{
                   return (
                    <option key={technology.id} value={technology}>{technology}</option>    
                   )
               })}
            </select>
         </p> */}

         
    </div>


)     



}
