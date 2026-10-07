import axios from "axios";
import { useState,useEffect } from "react";
 const Api=import.meta.env.VITE_API_URL;
 console.log(Api);
 
function ProductList(){
  const [products,setProducts]=useState([]);
 
 
  const getProduct=async()=>{
    try{
      const response =await axios.get(Api)
      console.log(response.data);
      setProducts(response.data)
      
    }catch(error){
      console.log(error);
      
    }
  }

  useEffect(()=>{
    getProduct()
  },[])
   return(
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
        {products.map((product)=>(
           <div key={product.id} >
           
             <h1>{product.title}</h1>
             <p>{product.body}</p>
            
           </div>)
         )}
       
    </div>
   )
}
export default ProductList;