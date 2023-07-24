import React from "react";

const ColorsFilter = ({ handlcolorfilter }) => {
    const handlcolor=(color)=>{
         handlcolorfilter(color);
    }
    return (
        <>
            <div className="color-filter">
                <div className="color-heading">
                    <h5>colors</h5>
                </div>
                <div className="colors">
                    <div className="colors-container">
                        <div className="allcolors">
                            <button onClick={()=>handlcolor(null)}></button>
                        </div>
                        <div className="red">
                            <button onClick={()=>handlcolor("red")}></button>
                        </div>
                        <div className="pink">
                            <button onClick={()=>handlcolor("pink")}></button>
                        </div>
                        <div className="green">
                            <button onClick={()=>handlcolor("green")}></button>
                        </div>
                        <div className="golden">
                            <button onClick={()=>handlcolor("golden")}></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ColorsFilter;