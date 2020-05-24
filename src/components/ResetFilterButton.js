import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTeachers } from '../store/teachers/selectors'

export default function ResetFilterButton() {
const dispatch = useDispatch()
const teachers = useSelector(selectTeachers);



function resetFilters(){
    const action = {
        type: "RESET_FILTERS",
        payload: teachers
        } 
        dispatch(action) 
    }


    return (
        <div>
            <button onClick={resetFilters}>reset filters</button>
        </div>
    )
}
