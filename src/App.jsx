import StudentCard from "./components/StudentCard";
import "./App.css";
import Profile from "./components/Profile";
import Card from "./components/Card.jsx"
function App(){
  const students=[
    {id:1,
      name:"Rubeena",
      course:"Full stack web development",
      marks:80
    },
    {id:2,
      name:"Ayesha",
      course:"Data Science",
      marks:45
    },
    {id:3,
      name:"Sana",
      course:"Web Development",
      marks:75
    }
  ];

  const passedStudents=students.filter((student)=>student.marks>50);

  return(
    <>
    <header/>
    <Profile/>
    <main>
      <h1>All students</h1>
      {students.map((student)=>(
        <StudentCard
         key={student.id}
         student={student}
        />
      ))}
      <h2>Passed Students: {passedStudents.length}</h2>
      {passedStudents.length===0?(
        <p>No students passed the exam.</p>
      ):(
        <p>{passedStudents.length} students passed the exam.</p>
      )}
      <Card title="My Profile">
        <p>Name:John Doe</p>
        <p>Role:React Learner</p>
      </Card>
      <Card title="My Learning Goals">
        <p>Master React</p>
        <p>Build Full Stack Applications</p>
        <p>Create a professional portfolio</p>
      </Card>
    </main>
    </>
  );
}
export default App;

/*////////////////////////////

function App(){
  const isLoggedIn=false;
  
  return(
    <div>
      {
        isLoggedIn?(
          <button>Logout</button>
        ):(
          <button>Login</button>)
      }
    </div>
  );
}
export default App;

/*////////////////////////////
/*function App(){
  const isLoggedIn=true;
  return(
    <div>
      {isLoggedIn?(<h1>Welcome back!</h1>):(<h1>Please Login</h1>)}
    </div>
  );
}
export default App;
//////////////////////

/*function App(){
  const isLoggedIn=false;
  if(isLoggedIn){
    return <h1>Welcome back!</h1>;
  }
  else{
    return <h1>please Login</h1>
  }
}
export default App;
//////////////////////////////

/*function App(){
  const products=[
    {id:1,name:"Laptop",price:800},
    {id:2,name:"Mobile",price:500},
    {id:3,name:"Tablet",price:300}
  ];

  return(
    <div>
      <h1>Affordable price</h1>
      {products.filter((product)=>(product.price<600)).map((product)=>(
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}
export default App;
////////////////////////////

/*function App(){
  const products=[
    {id:1,name:"Laptop",price:800},
    {id:2,name:"Mobile",price:500},
    {id:3,name:"Tablet",price:300}
  ];

  return(
    <div>
      <h1>ProductList</h1>
      {products.map((product)=>(
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price:${product.price}</p>
          <button>Buy Now</button>
        </div>
      ))}
    </div>
  );
}
export default App;
///////////////////////////////


/*function App(){
  const fruits=["Apple","Banana","Mango","Orange"];
  return(
    <>
    <h1>Fruits List</h1>
    {fruits.map((fruit)=>(
      <p key={fruit}>{fruit} </p>
    ))}
    </>
  );
}
export default App;
///////////////////////////////


/*function App(){
  const student={
    name:"Rubeena",
    course:"Full stack web development",
    marks:[80,90,75,85]
  };
  const total=student.marks.reduce((sum,mark)=>sum+mark,0);
  const average=total/student.marks.length;
  
  return(
    <>
    <h1>{student.name}</h1>
    <p>{student.course}</p>
    <p>{total}</p>
    <p>{average}</p>
    </>
  );
}
export default App;




/*function App(){
  const studentName="Rubeena";
  const courseName="Full stack web development";

  return(
    <>
    {/* student Information *///}
   /* <div className="student-card">
        <h1>Welcome, {studentName}!</h1>
        <p>Course: {courseName}</p>
    </div>
    <img src="https://placehold.co/150"
          alt="Student image"
          />
          <br/>
          <button onClick={()=>alert("Welcome to React")}>Click Me</button>
    </>
  );
}
export default App;
*/


/*import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App(){
  return(
    <div>
      <Header/>
      <main>
        <h2>Our Products</h2>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </main>
      <Footer/>
    </div>
  );
}
export default App;*/