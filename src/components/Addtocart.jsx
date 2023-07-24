import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ShoppedProducts from "./ShoppedProducts";
const Addtocart = ({cart,count,setCount,setCart,handleincdec}) => {
    const [price,setPrice]=useState(0);
    const handleremove=(id)=>{
        const removeproduct=cart.filter(products=>products.id !== id);
        setCart(removeproduct);
      }
const handleprice=()=>{
   
        let ans=0;
    cart.map(products=>{
       return ans=ans+(products.quantity * products.cost);
    })
    setPrice(ans);
}
useEffect(()=>{
    handleprice();
})
    return (
        <>
            <div className="cart-container" >
                <div className="header">
                    <Navbar cartcount={cart.length} />
                </div>
                <div className="shopping-items">
                <div className="back-to-shopping">
                    <div className="heading">
                        <h2>Shopping Cart</h2>
                    </div>
                    <div className="total-items">
                        <p>you have <span className="count">{cart.length}</span> items in cart</p>
                    </div>
                </div>
                <div className="cart-items-container">
                    <div className="cart-header">
                        <h5 className="product-width">Product</h5>
                        <h5 className="price-width">Price</h5>
                        <h5 className="quantity-width">Quantity</h5>
                        <h5 className="total-width">Total</h5>
                    </div>
                    <div className="scorollable-container">
                        {
                            cart.map((products,index)=>{
                                return (
                                    <ShoppedProducts
                                       key={index}
                                       products={products}
                                       count={count}
                                       setCount={setCount}
                                       cart={cart}
                                       setCart={setCart}
                                       handleremove={handleremove}
                                       handleincdec={handleincdec}
                                    />
                                )
                            })
                        }
                        
                    </div>
                    <div className="cart-total">
                        <h2>Your total price is : </h2>
                        <div className="price">Rs. {price}</div>
                    </div>
                   
                </div>
                
                </div>
                
            </div>
        </>
    );
}
export default Addtocart;