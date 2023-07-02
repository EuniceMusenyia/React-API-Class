import React, {useState, useEffect} from "react";

const Products = () =>{
    const [products, setProducts] =useState[''];

    useEffect(()=>{
        (async () =>{
            await getProducts();
        })();
        getProducts();
    },[])

    const getProducts = async ()=>{
        try{
            const response  = await fetch('https://dummyjson.com/products')
            const result = await response.json();
            setProducts(result);
        }
        catch(error){
            console.log(error.message);
        }
        
    };
    console.log({products});
    return(
        <div>
            
            Products Page
            {/* {products.map}(item=>) */}

        </div>
    )
}
export default Products

// const Products =() =>{
//     const [products, setProducts] = useState([]);
//     const [loading,setloading]= useState([]);
// }
// setloading(true)
// error.message

// if (loading){
//     return h3 loading
// }
// return

// {products.map(item=>)(
//   div key=(item.id)
//   h3 (item.title)  
// )}}