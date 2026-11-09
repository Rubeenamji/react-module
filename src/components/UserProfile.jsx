function UserProfile({name,age,skills,isAvailable}){
    return(
        <div className="user-card">
            <h2>{name}</h2>
            <p>Age:{age}</p>
            <h3>Skills:</h3>
            <ul>
                {skills.map((skill)=>(
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
            <p>Available:{isAvailable ? "available" : "Not available"}</p>
        </div>
    );
}
export default UserProfile;