function ProductCard({product}){
    return(
        <div className="product-card">
            <h2>{product.name}</h2>
            <p>Price:${product.price}</p>
            <p>{product.description}</p>
            <button>Buy Now</button>
        </div>
    );
}
export default ProductCard;