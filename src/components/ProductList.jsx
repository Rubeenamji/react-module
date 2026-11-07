import ProductCard from "./ProductCard";
function ProductList(){
    const products=[
        {id:1,name:"Laptop",price:800,description:"A high-performance laptop for work and play."},
        {id:2,name:"Mobile",price:500,description:"A sleek and powerful smartphone with a stunning display."},
        {id:3,name:"Tablet",price:300,description:"A versatile tablet for entertainment and productivity."}
    ];
    return(
        <section>
            <h1>our Products</h1>
            {products.map((product)=>(
                <ProductCard 
                key={product.id}
                product={product}/>
            ))}
        </section>
    );
}
export default ProductList;