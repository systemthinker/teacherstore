import React, {useState, useEffect} from 'react'
import { selectTeachers, selectFilteredTeachers, selectTechnologies } from '../store/teachers/selectors'
import { useSelector,useDispatch } from 'react-redux';


export default function FilterByMenu(props) {

  



const teachers = useSelector(selectTeachers)
const technologies = useSelector(selectTechnologies)
const dispatch = useDispatch();
const [filterByTechnology, setFilterByTechnology] = useState("")





const flattenedTechnologies = technologies.flat()
        
const removeDuplicatedTechnologies = [...new Set(flattenedTechnologies)];






  



  const teacherArrayCopy = [...teachers];

  const newTeachersFiltered = teacherArrayCopy.filter(teacher => teacher.technologies.map((tech)=> tech.title).includes(filterByTechnology))



  
  





 








useEffect(() => {
    if(filterByTechnology !== ""){
    const action = {
        type: "FILTER_BY_TECHNOLOGY",
        payload: filterByTechnology
        } 
        dispatch(action) 
    }
   
    


   
   
}, [filterByTechnology])

const filteredTeachers = useSelector(selectFilteredTeachers)








  

return (
    <div className="App">
        <p>
            Filter order:{" "}
            <select onChange={(e)=>setFilterByTechnology(e.target.value)}>
               {[...removeDuplicatedTechnologies].map((technology)=>{
                   return (
                    <option key={technology} value={technology}>{technology}</option>    
                   )
               })}
            </select>
        </p>

         
    </div>


)     



}
