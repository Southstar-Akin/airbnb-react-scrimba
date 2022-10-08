import React from "react";
import airbnblogo from "../images/Vector.png"

function NavBar(){
  return(
    <div className="h-[70px] shadow-md grid">
      <img src={airbnblogo} alt="" className=" grid justify-self-start self-center ml-[5.5vw] " />
    </div>
  )
}
export default NavBar