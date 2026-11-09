function StudentDisplay({name}){
 return(
    <div>
        <h1>Student Name:{name||"Unknown"}</h1>
    </div>
 )
}
export default StudentDisplay;