import React from 'react'

function StudentInput({onNameChange}) {
  return (
    <div><input type="text"
     placeholder="Enter student name"
     onChange={(event)=>onNameChange(event.target.value)}/>

     </div>
  )
}

export default StudentInput