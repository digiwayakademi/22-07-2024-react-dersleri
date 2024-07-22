import ProductItem from "./ProductItem";
import "./Products.css";
import productData from "../../productData";




const Products = () => {  
    
    return(
        <div className="products-wrapper">
             <h1>Products</h1>
             <div className="products">
               {productData.map((product) => (
                  <ProductItem 
                  key={product.productTitle}
                  product ={product}
                 />   
               ))}
                
                
             </div> 
        </div>
    )
}

export default Products; 