import React from "react";
import Navbar from "./Navbar";
import Collections from "./Collections";
import Marquee from "react-fast-marquee";
import Guarantee from "./Guarantee";
import { Instagram, Facebook, Twitter, MailOpen, Phone } from "lucide-react";
const Home = ({ cart }) => {

   return (
      <>
         <div className="homecontainer">
            <div className="top-head">
               <div className="top-head-container">
                  <div className="top-head-content">
                     <div className="contact-info">
                        <span><Phone size={20} height={17} color="#a89797" strokeWidth={1.25} /></span>
                        (+91) 9815096395</div>
                     <div className="email-info">
                        <span><MailOpen size={20} height={17} color="#a89797" strokeWidth={1.25} /></span>
                        email@gmail.com</div>
                     <div className="social-media-info">
                        <div className="instagram">
                           <Instagram size={20} height={17} color="#a89797" strokeWidth={1.25} /> </div>
                        <div className="facebook">
                           <Facebook size={20} height={17} color="#a89797" strokeWidth={1.25} /></div>
                        <div className="twitter">
                           <Twitter size={20} height={17} color="#a89797" strokeWidth={1.25} />
                        </div>
                     </div>
                  </div>

               </div>

               <div className="header">
                  <Navbar cartcount={cart.length} />
               </div>
            </div>
            <div className="childcontainer" >

               <div className="text">

                  <div className="text-container">

                     <p className="rk">R .K .</p>

                     {/* <div className="fashion-store"> */}
                     <img className="fashion-store" src="images/fashion.png " alt="fashion" />

                     {/* </div> */}

                  </div>
                  <div className="marquee-section">
                     <div className="marquee-container">
                        <Marquee>
                           <div className="mx-4 designer-jewellery">DESIGNER JEWELLERY</div>
                           <div className="mx-4 bangles">BANGLES</div>
                           <div className="mx-4 purse">PURSES</div>
                           <div className="mx-4 cosmetics">COSMETICS</div>

                        </Marquee>
                     </div>
                  </div>
                  <div className="shopnow">
                     <a href="home"> <button className="shopbtn">Shop Now</button></a>
                  </div>
               </div>
               <div className="childbg">
                  <img src="https://cdn.staticans.com/image/tr:e-sharpen-01,h-1440,w-1080,cm-pad_resize/data/ToniQ/04-jan-2023/OAW22FIJJS94_1.jpg" alt="bg" />
               </div>
            </div>

            <Collections />
            <Guarantee/>
         </div>
      </>
   );
};

export default Home;