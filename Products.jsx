import React, { createContext, useEffect, useState } from 'react'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Css/Products.module.css'
import { Outlet } from 'react-router-dom'
import { Cart } from './Cart'
import  Axios  from 'axios'

export let cartContaxt=createContext()
function Products() {

    let [product,setproducts]=useState([])
    let [isLoading,setisLoading]=useState(false)
    let [isError,setisError]=useState(false)
    let [visibile,setvisible]=useState(false)
    let [currentCart,UpdateCart]=useState(0)
    let [id,setId]=useState([])
    let [price,addPrice]=useState(0)
    let add=(i,p)=>{
        UpdateCart(currentCart+1)
        setId([...id,i])
        addPrice(price,p)
        
       }
       console.log(price);
       let remove=(i,p)=>{
        console.log(i)
        if(id.includes(i)){
          id.splice(id.indexOf(i),1)
          addPrice(price-p) 
         setId(id)
        if(currentCart>0){
          UpdateCart(currentCart-1) 
         
        }
        }
       }
        console.log(id)
    let show=()=>{
        setvisible(!visibile)
    }
 
        let getProduct=async()=>{
            try{
                let fakeproducts=await Axios.get('http://localhost:4000/products');
                console.log(fakeproducts.data);
                setproducts(fakeproducts.data);
                setisLoading(false)
                setisError(false)
            }
            catch(err){
                  console.log(err);
                  setisError(true)
                  setisLoading(false)
            }
        }
        useEffect(()=>{
            setisLoading(true)
            getProduct()
        },[])  
       

return(

    <div className='container'>
     <div className='row'>
      <div className='d-flex flex-wrap justify-content-evenly'>
        {isError && <h1 style={{color:"red"}}>OOPS SOMETHING WENT WRONG!!!!!</h1>}
        <div className='parent'> 
     
       <div className='crt'>
       <cartContaxt.Provider value={currentCart}>
            <Cart/>
            </cartContaxt.Provider>
       </div>
         {!isLoading && product.map((product)=>{
            return<div className='container'>
                <div className='row-md-3'></div>
            <div className='map order-5 p-5 m-2 d-flex-col align-items-center justify-content-center '>
                <img key={product.id} src={product.image} height={200} width={200} className='img d-flex justify-content-center'/>
                <h6 key={product.id}>{product.title}</h6>
         {visibile  &&  <div>
            <h4 key={product.id}>Rs:{product.price}</h4>
            <h6 key={product.id}>{product.description}</h6> 
            <h5 key={product.id}>Rating:{product.rating.rate}</h5>
            <h6 key={product.id}>Category:{product.category}</h6>
            <button className=' add ' onClick={(e)=>{add(e.id,e.price,e.title)}}>ADD TO CART</button>
            <button className='rem'onClick={(e)=>{remove(e.id,e.price)}}>Remove Cart</button>
            <button className='buy'>BUY Now</button>
            </div> }
            <Outlet/>
            <button className=' show ' onClick={show}>{visibile?"SeeLess":"SeeMore"}</button>
            </div>
        </div>
        })}
         
       

            </div>
            </div> 
           </div>
  </div>
  
  )
}

export default Products