import React, { useState } from "react";
import Earingdata from "./Earingdata";
import EaringCards from "./EaringCards";
import Navbar from "./Navbar";
import ColorsFilter from "./ColorsFilter";
import Occasionfilter from "./Occasionfilter";
const EaringsCol = ({ handleclick, cart }) => {
    const [appliedfiltersarr, setAppliedfiltersarr] = useState([{ colortype: null, occasiontype: null }]);
    const [selectedColor, setSelectedColor] = useState(null);
    const [Occasiontype, setOccasiontype] = useState(null);
    const handlcolorfilter = (color) => {
        setSelectedColor(color);
        setAppliedfiltersarr((olditem) => {
            return [{ ...olditem[0], colortype: color, occasiontype: Occasiontype }];
        })
    }
    const handloccasionfilter = (occasion) => {
        setOccasiontype(occasion);
        setAppliedfiltersarr((olditem) => {
            return [{ ...olditem[0], colortype: selectedColor, occasiontype: occasion }];
        })
    }

    const getfiltereditems = () => {
        let filteritem = Earingdata;

        if (selectedColor != null) {
            filteritem = filteritem.filter((products) => products.color === selectedColor
            )

        }
        if (Occasiontype != null) {
            filteritem = filteritem.filter((products) => products.occassion === Occasiontype);

        }
        // setAppliedfiltersarr({color:selectedColor,occasion:Occasiontype});
        // console.log(appliedfiltersarr.color,appliedfiltersarr.occasion);
        return filteritem;
    }
    return (
        <>
            <div className="earingcontainer">
                <div className="header">
                    <Navbar cartcount={cart.length} />
                </div>
                <div className="filter-card">
                    <div className="filter">
                        <div className="filter-container">
                            <div className="filter-heading">
                                <h3>Filters</h3>
                            </div>
                            <div className="different-filters">
                                <ColorsFilter handlcolorfilter={handlcolorfilter} />
                                <Occasionfilter handloccasionfilter={handloccasionfilter} />
                            </div>
                        </div>
                    </div>

                    <div className="cards">
                        <div className="showappliedfilters">
                            <div className="container">
                                {appliedfiltersarr.map((filters) => {
                                    return (
                                        <>
                                            <div style={{marginRight:"21px"}}>
                                                {filters.colortype && <p>color : {filters.colortype}</p>}
                                            </div>
                                               
                                            <div>
                                            {filters.occasiontype && <p>occasion : {filters.occasiontype}</p>}
                                            </div>
                                          
                                        </>
                                    )









                                })}
                            </div>
                        </div>
                        <div className="container">
                            {getfiltereditems().map((items, index) => {
                                return (
                                    <EaringCards
                                        key={index}
                                        item={items}
                                        handleclick={handleclick}
                                    />
                                )
                            })}
                        </div>

                    </div>

                </div>
            </div>

        </>
    );
}
export default EaringsCol;