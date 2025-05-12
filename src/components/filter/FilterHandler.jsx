import React from 'react'
import courses from '../../assets/files/courses'

function FilterHandler({setCourses, institutes, title}) {
  const handleChange =(e)=>{
    let selected = [];
    
    if(e.target.name === "institute"){
      if(e.target.value === "all" | e.target.value === ""){
        selected = courses.filter(course => course.institute)
      }else {
        selected = courses.filter(course => course.institute === e.target.value)
      }
    } else if(e.target.name === "course title"){
      if(e.target.value === "all" | e.target.value === ""){
        selected = courses.filter(course => course.title)
      }else{
        selected = courses.filter(course => course.title === e.target.value)
      }
    } else if(e.target.name === "course code"){
      if(e.target.value === "all" | e.target.value === ""){
        selected = courses.filter(course => course.code)
      }else{
        selected = courses.filter(course => course.code === e.target.value)
      }
    }
    setCourses(selected)
  }
  return (
    <div className='filter-handler'>
        <select name={title} onChange={handleChange} id="institutre-categories">
            <option value="">Select {title}...</option>
            <option value="all">All</option>
            {institutes.map(institute => <option key={institute} value={institute}>{institute}</option>)}
        </select>
    </div>
  )
}

export default FilterHandler
