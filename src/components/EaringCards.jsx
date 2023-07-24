import React from "react";

const EaringCards = ({item,handleclick}) => {

    const clicked=(item)=>{
        handleclick(item);
    }

    return (
       
        <>
            <div className="card">
                <div className="bg">
                    <img src={item.img} alt="earing" />
                </div>
                <div className="textcontainer">
                    <div className="earingname">
                        <p>{item.text}</p>
                    </div>
                    <div className="earingtype">
                        <p>{item.sometext}</p>
                    </div>
                    <div className="earingcost">
                        <p>{item.cost}</p>
                    </div>
                    <div className="addtobag">
                        <button onClick={()=>clicked(item)} >Add To Bag</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default EaringCards;