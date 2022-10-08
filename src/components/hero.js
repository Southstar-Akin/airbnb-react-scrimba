import React from "react";
import groupi from "../images/Group77.png"

function Hero(){
  return(
    <div className=" mt-[26px] grid justify-items-center mx-[6.6vw]">
      <img src={groupi} alt="group image"/>
    <h1 className=" text-[36px] font-semibold grid justify-self-start mt-[32px]">Online Experiences</h1>
    <p className=" font-light grid justify-self-start font-Poppins">Join unique interactive activities led by <br/> one-of-a-kind hosts—all without leaving
     <br/> home.
</p>
    </div>
  )
}

export default Hero