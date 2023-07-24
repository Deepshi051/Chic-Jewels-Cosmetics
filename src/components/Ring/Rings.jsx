import React from "react";
import RingsData from "./RingsData";
import EaringCards from "../EaringCards";
import Navbar from "../Navbar";
const Rings = ({ handleclick ,cart}) => {
    return (
        <>
            <div className="header">
                <Navbar cartcount={cart.length} />
            </div>
            <div className="ring-container">
                {RingsData.map((items) => {
                    return (
                        <EaringCards
                            item={items}
                            handleclick={handleclick}
                        />

                    )
                })}
            </div>
        </>
    );
}

export default Rings;