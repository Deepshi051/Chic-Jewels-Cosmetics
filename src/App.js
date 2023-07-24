import Home from "./components/Home";
import EaringsCol from "./components/EaringsCol";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Addtocart from "./components/Addtocart";
import { useState } from "react";
import Rings from "./components/Ring/Rings";

function App() {
  const [cart, setCart] = useState([]);
  // const [isPresent,setPresent]=useState(false);
  const [count, setCount] = useState(1);

  const handleclick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
        setCount(count);
      }
    })
    if (isPresent) {
      console.log("present");
      setCart([...cart]);
    }
    else {
      console.log("else running")
      setCart([...cart, item]);

    }


  }
  const handleincdec = (item, plusminus) => {
    console.log(item, plusminus)
    let ind = -1;  //initialized the index with -1;
    cart.forEach((product, index) => {
      if (item.id === product.id) {
        ind = index;

      }
    })
    console.log("index is : " + ind)
    //created a temparr in which cart array is copied
    const temparr = cart;

    //uss index pr ab jo bhi value hogi either vo one se increment hogi ya decrement    
    temparr[ind].quantity += plusminus;
    if (temparr[ind].quantity === 0) {
      temparr[ind].quantity = 1;
    }


    setCart([...temparr]);

  }

  return (
    <>

      <Routes>
        <Route exact path="/" element={<Home cart={cart} />} />
        <Route exact path="/earingscollection"
          element={<EaringsCol handleclick={handleclick} cart={cart} />}
        />
        <Route exact path="/ringscollection"
          element={<Rings handleclick={handleclick} cart={cart} />}
        />
        <Route exact path="/cart" element={<Addtocart cart={cart} count={count} setCount={setCount} setCart={setCart} handleincdec={handleincdec} />} />
      </Routes>





    </>
  );
}

export default App;
