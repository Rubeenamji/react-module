function StudentCard({student,onSelect}){
    return(
        <div className="student-card">
            <h2>{student.name}</h2>
            <p>Course:{student.course}</p>
            <p>Mark:{student.marks}</p>
            {student.marks>50?(
                <p className="pass">Passed</p>
            ):(
                <p className="fail">Failed</p>
            )}
            <button onClick={()=>onSelect(student.name)}>Select</button>
        </div>
    );
}
export default StudentCard;