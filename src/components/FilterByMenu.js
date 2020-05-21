import React, {useState, useEffect} from 'react'
import { selectTeachers, selectTechnologies } from '../store/teachers/selectors'
import { useSelector,useDispatch } from 'react-redux';


export default function FilterByMenu() {

const technologies = useSelector(selectTechnologies).flat() 

const flattenedTechnologies = [...new Set(technologies)];

console.log('flattended technologies', flattenedTechnologies)
    
const teachers = useSelector(selectTeachers)
const dispatch = useDispatch();
const [filterBy, setFilterBy] = useState("")




  



  const teacherArrayCopy = [...teachers];

  const newTeachersFiltered = teacherArrayCopy.filter(teacher => teacher.technologies.map((tech)=> tech.title).includes(filterBy))



  
  





 








useEffect(() => {
    if(filterBy !== ""){
    const action = {
        type: "CHANGE_SORTING_BY_TAG",
        payload: newTeachersFiltered
        } 
        dispatch(action) 
    }
    
}, [filterBy])







  

return (
    <div className="App">
        <p>
            Filter order:{" "}
            <select onChange={(e)=>setFilterBy(e.target.value)}>
               {[...flattenedTechnologies].map((technology)=>{
                   return (
                    <option key={technology.id} value={technology}>{technology}</option>    
                   )
               })}
            </select>
         </p>

         
    </div>


)     



}
