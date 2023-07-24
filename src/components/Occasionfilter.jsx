import React from "react";
const Occasionfilter = ({handloccasionfilter}) => {
    const handloccasion=(type)=>{
      handloccasionfilter(type)
    }
    return (
        <>
            <div className="occasion-filter">
                <div className="occasion-heading">
                    <h5>Occasion</h5>
                </div>
                <div className="occasion">
                    <div className="occasion-container">
                        <div className="casual">
                            <button onClick={()=>handloccasion("casual")}>Casual</button>
                        </div>
                        <div className="partwear">
                            <button onClick={()=>handloccasion("party-Wear")}>Party Wear</button>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
export default Occasionfilter;