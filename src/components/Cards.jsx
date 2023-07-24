import React from "react";
import {useNavigate} from "react-router-dom";

const Cards =(props)=>{
    const navigate=useNavigate();
    const collections=(id)=>{
      console.log("key is : "+id)
        if(id === 1){
            navigate("/earingscollection");
            return;
        }
         if(id === 2){
            navigate("/ringscollection");
            return;
         }
         if(id === 3){
            navigate("/necklacecollection");
            return;
         }
         if(id === 4){
            navigate("/lipstickscollection");
            return;
         }
     
    //   navigate("/product");
    }
    return(
        <>
          <div className="cardcontainer">
              <div className="cardbg">
                  <img src={props.imgsrc} alt="bgimage" />
                  <p className="title">{props.data}</p>
                 
                  <div className="overlay"></div>
                  <div className="cardbtn">
                  <button onClick={()=>collections(props.id)}>Shop Collections</button>
                  </div>
              </div>
              {/* <div className="cardtextcontainer">
                   <div className="para">
                   <p>
                    
                   </p>
                   </div>
                   
              </div> */}
          </div>
        </>
    );
}

export default Cards;