import React from "react";
import CollectionData from "./CollectionData";
import Cards from "./Cards";
const Collections = () => {
  return (
    <>
      <div className="collections">
        <h1>Our Collections</h1>
        
        <div className="collection-container">
          {/* <div className="cards-container"> */}
          <div className="cards">
            {
              CollectionData.map((items, index) => {
                return (<Cards
                  key={index}
                  id={items.id}
                  imgsrc={items.imgsrc}
                  data={items.data}
                />)
              })
            }
            {/* </div> */}
          </div>

        </div>

      </div>
    </>
  );
}

export default Collections;