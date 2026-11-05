
import { useState } from "react";

function App() {
  const [page, setPage] = useState("Home");

  return (
    <div>
      <h1>My First SPA</h1>

      <nav>
        <button onClick={() => setPage("Home")}>
          Home
        </button>

        <button onClick={() => setPage("About")}>
          About
        </button>

        <button onClick={() => setPage("Contact")}>
          Contact
        </button>
      </nav>

      <hr />

      {page === "Home" && <h2>Welcome Home!</h2>}
      {page === "About" && <h2>About Us</h2>}
      {page === "Contact" && <h2>Contact Us</h2>}
    </div>
  );
}

export default App;
