import React from "react";
const ShoppedProducts = ({ cart, products, count ,setCart,handleremove,handleincdec}) => {
    const { id, img, text, sometext, cost ,quantity} = products;


    return (
        <>

            {/* {console.log(id)} */}
            <div className="cart-data" key={id}>
                <div className="product-width">
                    <div className="productimg">
                        <img src={img} alt="earing" />
                    </div>
                    <div className="item-details">
                        <h5>{text}</h5>
                        <p>{sometext}</p>

                    </div>
                </div>
                <div className="price-width">
                    <h5 className="price">{cost}/-</h5>
                </div>
                <div className="quantity-width">
                    <div className="form">
                        <span className="plus"> <button onClick={()=>handleincdec(products,+1)}> + </button> </span>
                        <p>{quantity}</p>
                        <span className="minus">
                            <button onClick={()=>handleincdec(products,-1)}> - </button>
                        </span>
                    </div>

                </div>
                <div className="total-width">
                    <h5 className="price">{cost*quantity}/-</h5>

                </div>
                <div className="trash">
                    <i className="fa-solid fa-trash" onClick={()=>handleremove(id)}></i>
                </div>

            </div>
            <hr />
        </>
    );
}
export default ShoppedProducts;