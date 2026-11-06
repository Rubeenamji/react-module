import Header from "./components/Header";
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
export default App;