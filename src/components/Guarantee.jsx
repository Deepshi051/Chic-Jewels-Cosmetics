import React from "react";
const Guarantee =()=>{
    return(
        <>
          <div className="guarantee">
            <div className="container">
                <div className="cards">
                    <div className="card-container">
                        <img src="images/free-shipping.png" alt="shipping" />
                        <h3>Free Shipping</h3>
                    </div>
                    <div className="card-container">
                        <img src="images/payment.png" alt="" />
                        <h3>Flexible Payment</h3>
                    </div>
                    <div className="card-container">
                        <img src="images/high-quality.png" alt="" />
                        <h3>High Quality</h3>
                    </div>
                    <div className="card-container">
                        <img src="images/return.png" alt="" />
                        <h3>Easy return</h3>
                    </div>

                </div>
            </div>
          </div>
        </>
    );
}

export default Guarantee;