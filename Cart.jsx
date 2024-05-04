import React, { useContext } from 'react'
import '../Css/Cart.module.css'
import { cartContaxt } from './Products';
import { CiShoppingCart } from "react-icons/ci";

export const Cart = ()=> {
    let count=useContext(cartContaxt)
   
     return (
       <div className='cart'>Cart:
         <CiShoppingCart/>{count}
   </div>
     )
   }