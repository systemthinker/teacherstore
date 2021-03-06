import React, { useState } from "react";
import Header from '../components/Header'
import ProductCard from "../components/ProductCard";
import SortByMenu from "../components/SortByMenu";
import FilterByMenu from '../components/FilterByMenu'
import ResetFilterButton from '../components/ResetFilterButton'
import { selectTeachers } from "../store/teachers/selectors";
import { useSelector } from "react-redux";


export default function HomePage(props) {
const teachers = useSelector(selectTeachers)

  return (
   <div>
    <Header />
    <SortByMenu/>
    <FilterByMenu />
    <ResetFilterButton />
    <ProductCard/>
    
    
    <h1>Hello!</h1>
  </div> 
  )
}